import {Controller, useFormContext} from "react-hook-form";
import * as React from "react";
import {useContext} from "react";
import {ClassNameMap} from "@mui/styles";
import {TextField} from "@mui/material";
import {ConfigurationContext} from "../../../../context/configurationContext";
import {isOutsideCollectionEditContext} from "../../util/KeyUtils";

interface Props {
    classes: ClassNameMap;
    absoluteKey: string;
    displayName: string;
    multiline?: boolean;
    disabled?: boolean;
}

const StringValueComponent: React.FunctionComponent<Props> = (props: Props) => {
    const {control} = useFormContext();
    const {editCollectionAbsoluteKey} = useContext(ConfigurationContext)
    return (
        <div id={"string-value-component-" + props.absoluteKey} style={{display: 'flex', flexDirection: 'column'}}>
            <Controller
                name={props.absoluteKey}
                control={control}
                render={({field}) =>
                    <>
                        <TextField
                            style={{backgroundColor: 'white'}}
                            variant='outlined'
                            size='small'
                            label={props.displayName}
                            disabled={
                                props.disabled
                                || isOutsideCollectionEditContext(props.absoluteKey, editCollectionAbsoluteKey)
                            }
                            multiline={props.multiline}
                            {...field}
                        />
                    </>
                }
            />
        </div>
    )
}
export default StringValueComponent;