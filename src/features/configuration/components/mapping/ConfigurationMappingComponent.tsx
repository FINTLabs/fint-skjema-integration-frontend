import {ClassNameMap} from "@mui/styles";
import * as React from "react";
import {ReactElement, useState} from "react";
import ObjectMappingComponent, {NestedElementTemplate} from "./ObjectMappingComponent";
import {ICollectionTemplate, IMappingTemplate, IObjectTemplate, IValueTemplate} from "../../types/FormTemplate";
import {ElementTemplates, NestedElementsCallbacks} from "../../types/NestedElementCallbacks";
import ValueCollectionMappingComponent from "./ValueCollectionMappingComponent";
import ObjectCollectionMappingComponent from "./ObjectCollectionMappingComponent";
import ColumnElementComponent from "./ColumnElementComponent";
import {range} from "lodash";
import {useFormContext} from "react-hook-form";

interface Props {
    classes: ClassNameMap
    mappingTemplate: IMappingTemplate;
}

const ConfigurationMappingComponent: React.FunctionComponent<Props> = (props: Props) => {

    const {unregister} = useFormContext();

    type ColumnElement = {
        path: string[],
        title: string,
        reactElement: ReactElement<{ absoluteKey: string }>,
        nestedColumnElements: Record<string, ColumnElement>
    }

    function createRootElement(): ColumnElement {
        const nestedColumnElements = {};
        return {
            path: [],
            title: props.mappingTemplate.displayName,
            reactElement: <ObjectMappingComponent
                classes={props.classes}
                absoluteKey={"mapping"}
                template={props.mappingTemplate.rootObjectTemplate}
                nestedElementCallbacks={createNestedElementsCallbacks(
                    [],
                    nestedColumnElements
                )}
            />,
            nestedColumnElements: nestedColumnElements
        }
    }

    const rootElement = createRootElement();
    const [displayRootElement, setDisplayRootElement] = useState<ColumnElement>(rootElement);

    function createNestedElementsCallbacks(displayPath: string[], nestedColumnElements: Record<string, ColumnElement>): NestedElementsCallbacks {
        return {
            onElementsOpen: (elementTemplates: ElementTemplates) => {
                elementTemplates.objects?.forEach(
                    (template: NestedElementTemplate<IObjectTemplate>) => {
                        const newNestedColumnElements: Record<string, ColumnElement> = {};
                        nestedColumnElements[template.order.toString()] =
                            {
                                path: [...displayPath, ...template.displayPath],
                                title: template.displayName,
                                reactElement: <ObjectMappingComponent
                                    classes={props.classes}
                                    absoluteKey={template.absoluteKey}
                                    template={template.template}
                                    nestedElementCallbacks={createNestedElementsCallbacks(
                                        [...displayPath, ...template.displayPath, template.displayName],
                                        newNestedColumnElements
                                    )}
                                />,
                                nestedColumnElements: newNestedColumnElements
                            }

                    })
                elementTemplates.objectCollections?.forEach(
                    (template: NestedElementTemplate<ICollectionTemplate<IObjectTemplate>>) => {
                        const newNestedColumnElements: Record<string, ColumnElement> = {};
                        nestedColumnElements[template.order.toString()] =
                            {
                                path: [...displayPath, ...template.displayPath],
                                title: template.displayName,
                                reactElement: <ObjectCollectionMappingComponent
                                    classes={props.classes}
                                    absoluteKey={template.absoluteKey}
                                    elementTemplate={template.template.elementTemplate}
                                    nestedElementCallbacks={
                                        createNestedElementsCallbacks(
                                            [...displayPath, ...template.displayPath, template.displayName],
                                            newNestedColumnElements
                                        )
                                    }
                                />,
                                nestedColumnElements: newNestedColumnElements
                            }
                    })
                elementTemplates.valueCollections?.forEach(
                    (template: NestedElementTemplate<ICollectionTemplate<IValueTemplate>>) => {
                        const newNestedColumnElements: Record<string, ColumnElement> = {};
                        nestedColumnElements[template.order.toString()] =
                            {
                                path: [...displayPath, ...template.displayPath],
                                title: template.displayName,
                                reactElement: <ValueCollectionMappingComponent
                                    classes={props.classes}
                                    absoluteKey={template.absoluteKey}
                                    elementTemplate={template.template.elementTemplate}
                                />,
                                nestedColumnElements: newNestedColumnElements
                            }
                    }
                )
                setDisplayRootElement({...rootElement});
            },

            onElementsClose: (elementOrders: string[], unregisterKeys?: boolean) => {
                elementOrders.forEach((order: string) => {
                    const absoluteKey: string | undefined = nestedColumnElements[order]?.reactElement.props.absoluteKey;
                    delete nestedColumnElements[order]
                    if (unregisterKeys && absoluteKey) {
                        unregister(absoluteKey)
                    }
                })
                setDisplayRootElement({...rootElement});
            },

            onAllNestedElementsClose: (parentOrder: string) => {
                getEntriesWithKeyStartingWith(nestedColumnElements, parentOrder)
                    .forEach(([order, value]) => {
                            delete nestedColumnElements[order]
                        }
                    );
                setDisplayRootElement({...rootElement});
            }
        }
    }

    function getEntriesWithKeyStartingWith<T>(record: Record<string, T>, startingWith: string): [string, T][] {
        return Object.entries(record)
            .filter(([order]: [string, T]) => order.startsWith(startingWith))
    }

    function getElementsByColumn(columnElement: ColumnElement): Omit<ColumnElement, 'nestedColumnElements'>[][] {
        return [
            [columnElement],
            ...Object.entries(columnElement.nestedColumnElements)
                .sort(([key1], [key2]) => key1.localeCompare(key2, undefined, {numeric: true}))
                .map(([order, nestedColumnElement]) => getElementsByColumn(nestedColumnElement))
                .reduce((combinedChildColumns: Omit<ColumnElement, 'nestedColumnElements'>[][], childColumns: Omit<ColumnElement, 'nestedColumnElements'>[][]) => {
                    range(0, childColumns.length)
                        .forEach((columnIndex: number) => {
                            if (!combinedChildColumns[columnIndex]) {
                                combinedChildColumns[columnIndex] = []
                            }
                            combinedChildColumns[columnIndex] = combinedChildColumns[columnIndex].concat(childColumns[columnIndex])
                        })
                    return combinedChildColumns;
                }, [])
        ]
    }

    return (
        <>
            {getElementsByColumn(displayRootElement).map((columns: Omit<ColumnElement, 'nestedColumnElements'>[], index) =>
                <>
                    <div id={'column-' + index} key={'column-' + index}
                         className={props.classes.column}>
                        {
                            columns.map((columnElement: Omit<ColumnElement, 'nestedColumnElements'>) => {
                                    return <ColumnElementComponent
                                        classes={props.classes}
                                        index={index}
                                        path={columnElement.path}
                                        title={columnElement.title}
                                        content={columnElement.reactElement}
                                    />
                                }
                            )
                        }
                    </div>
                </>
            )}
        </>
    )
}

export default ConfigurationMappingComponent;
