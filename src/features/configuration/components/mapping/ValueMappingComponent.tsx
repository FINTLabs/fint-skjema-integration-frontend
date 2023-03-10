import * as React from "react";
import {ElementComponentProps} from "../../types/ElementComponentProps";
import {IValueTemplate, ValueType as TemplateValueType} from "../../types/NewForm/FormTemplate";
import StringValueComponent from "../common/StringValueComponent";
import DynamicStringValueComponent from "../common/DynamicStringValueComponent";
import {useFormContext} from "react-hook-form";
import {ValueType as ConfigurationValueType} from "../../types/Configuration";
import {ValueType as MetadataValueType} from "../../types/Metadata/IntegrationMetadata";

interface Props extends ElementComponentProps {
    template: IValueTemplate
}

const ValueMappingComponent: React.FunctionComponent<Props> = (props: Props) => {
    const {setValue} = useFormContext();
    const valueAbsoluteKey: string = props.absoluteKey + ".mappingString"
    switch (props.template.type) {
        case TemplateValueType.STRING:
            setValue(props.absoluteKey + ".type", ConfigurationValueType.STRING)
            return <StringValueComponent
                classes={props.classes}
                absoluteKey={valueAbsoluteKey}
                displayName={props.displayName}
            />
        case TemplateValueType.DYNAMIC_STRING:
            setValue(props.absoluteKey + ".type", ConfigurationValueType.DYNAMIC_STRING)
            return <DynamicStringValueComponent
                classes={props.classes}
                absoluteKey={valueAbsoluteKey}
                displayName={props.displayName}
                accept={[
                    MetadataValueType.STRING,
                    MetadataValueType.INTEGER,
                    MetadataValueType.EMAIL,
                    MetadataValueType.DATE,
                    MetadataValueType.PHONE
                ]}
            />
        case TemplateValueType.FILE:
            setValue(props.absoluteKey + ".type", ConfigurationValueType.FILE)
            return <DynamicStringValueComponent
                classes={props.classes}
                absoluteKey={valueAbsoluteKey}
                displayName={props.displayName}
                accept={[
                    MetadataValueType.FILE
                ]}
            />
    }
}
export default ValueMappingComponent