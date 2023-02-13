import React, {useContext, useEffect, useState} from 'react'
import { useDrop } from 'react-dnd'
import { DraggableTypes } from './DraggableTypes'
import {Controller} from 'react-hook-form';
import {TextField} from "@mui/material";
import {ITag} from "../../types/Tag";
import { useTranslation } from 'react-i18next';
import {SourceApplicationContext} from "../../../../context/sourceApplicationContext";


function extractMetadata(sentence: string, first: string, last: string): string[] {
    let tags: string[] = [];
    const splitString = sentence.split(first);
    splitString.forEach((subStr: string) => {
        if (subStr.indexOf(last) > -1) {
            const toSave = (subStr.split(last))[0];
            tags = tags.concat(toSave);
        }
    });

    return tags;
}

export const TextFieldWithDropZone: React.FunctionComponent<any> = (props) => {
    const { t } = useTranslation('translations', { keyPrefix: 'inputField'});
    let backgroundColor = 'white';
    let errorMessage: string = t('errorMessage') + t(props.label);
    let initValue: string = props.value === null ? '' : props.value;
    const {instanceElementMetadata} = useContext(SourceApplicationContext)
    const setPropValue = props.setValue;
    const regExp = /^(?:(?:(?!\$if\{).)+|(?:\$if\{(?:(?!\$if\{).)+})+)+$/g;

   // console.log(instanceElementMetadata)

    function validAndExisting(value: string): boolean {
            if(value && value !== '') {
                const instanceFields = extractMetadata(value, '$if{', '}')
                console.log(instanceFields)
            }
        return false
    }


    const [inputValue, setInputValue] = useState(initValue);
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: DraggableTypes.TAG,
        drop: (tag:ITag) => {
            setInputValue(prevState => prevState + tag.value);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    validAndExisting(inputValue)


    if (canDrop && isOver) {
        backgroundColor = 'palegreen';
    } else if (canDrop) {
        backgroundColor = 'aliceblue'
    }

    useEffect(() => {
        setPropValue(props.formValue, inputValue)
    }, [inputValue, setInputValue, setPropValue, props.formValue]);

    const validation = props.validation;
    const error = props.error;
    const validRegEx: boolean = regExp.test(inputValue)


    return (
        <Controller
            control={props.control}
            name={props.formValue}
            render={({ field: { onChange, value } }) => {
                value=inputValue;
                return (
                    <TextField
                        disabled={props.disabled}
                        id={props.id}
                        ref={drop}
                        size="small"
                        style={{backgroundColor}}
                        sx={{ mb: 3, width: 'inherit' }}
                        label={props.required ? (t(props.label)+'*') : t(props.label)}
                        value={value}
                        onChange={(e) => {
                            setInputValue(e.target.value as string);
                            onChange(e);
                        }}
                        error={(!!props.error && props.required) || (inputValue === '' && props.required && !!props.error)}
                        helperText={(value === '' && error && props.required && validation) ? 'Obligatorisk felt' : ((validation && inputValue !== '' && !validRegEx) ? 'Data fra skjema må være på formatet $if{metadata}' : '')}
                    />)
            }}
            rules={
                validation ? {
                    pattern: {value: regExp, message: errorMessage},
                    required: {value: props.required, message: errorMessage}
                } : {}
            }
        />
    )
}
