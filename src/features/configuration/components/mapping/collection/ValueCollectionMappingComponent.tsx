import {ClassNameMap} from "@mui/styles";
import * as React from "react";
import CollectionMappingComponent from "./common/CollectionMappingComponent";
import ValueMappingComponent from "../value/ValueMappingComponent";
import {IValueTemplate} from "../../../types/FormTemplate";

export interface Props {
    classes: ClassNameMap;
    absoluteKey: string;
    elementTemplate: IValueTemplate;
}

const ValueCollectionMappingComponent: React.FunctionComponent<Props> = (props: Props) => {
    return <CollectionMappingComponent
        classes={props.classes}
        absoluteKey={props.absoluteKey}
        elementComponentCreator={(order: string, displayPath: string[], absoluteKey: string) =>
            <ValueMappingComponent
                classes={props.classes}
                order={Number.parseInt(order)}
                absoluteKey={absoluteKey}
                displayName={order}
                template={props.elementTemplate}
                collection={true}
            />
        }
    />
}
export default ValueCollectionMappingComponent