import * as React from "react";
import {ReactElement} from "react";
import {useFieldArray, useFormContext} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {ClassNameMap} from "@mui/styles";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {iconButtonSX} from "../../styles/SystemStyles";

interface Props {
    classes: ClassNameMap;
    absoluteKey: string;
    fieldComponentCreator: (index: number, absoluteKey: string) => ReactElement
    defaultValueCreator: () => any,
    onFieldClose?: (index: number) => void
}

const ArrayComponent: React.FunctionComponent<Props> = (props: Props) => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.configuration'});
    const classes = props.classes;
    const {control} = useFormContext();
    const {fields, append, remove} = useFieldArray({
        control,
        name: props.absoluteKey
    });
    return <ul id={'list-' + props.absoluteKey} className={props.classes.listBorderless}>
        {fields.map((field, index) => (
                <li id={'list-item-' + index} className={classes.listItem} key={field.id}>
                    {props.fieldComponentCreator(
                        index,
                        props.absoluteKey + "." + index
                    )}
                </li>
            )
        )}
        <AddIcon sx={iconButtonSX} onClick={() => {
            append(props.defaultValueCreator())
        }}/>
        {fields.length > 0 &&
            <RemoveIcon sx={iconButtonSX} onClick={() => {
                const index = fields.length - 1;
                remove(fields.length - 1);
                if (props.onFieldClose) {
                    props.onFieldClose(index)
                }
            }}
            />}
    </ul>
}
export default ArrayComponent