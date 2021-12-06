import React, {CSSProperties, useState} from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import {TagProps} from "./Tag";
import {TextField, Typography} from "@mui/material";

const style: CSSProperties = {
    width: '100rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'black',
    padding: '1rem',
    textAlign: 'left',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}

export const Dropzone: React.FunctionComponent<any> = (props) => {
    const [value, setValue] = useState('empty string waiting for tags')
    const [inputValue, setInputValue] = useState('')
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.TAG,
        drop: (tag:TagProps) => {
            console.log('tag', tag.value);
            setValue(prevState => prevState + ' ' + tag.value)
            setInputValue(prevState => prevState + ' ' + tag.value)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    const isActive = canDrop && isOver
    let backgroundColor = 'lightblue'
    if (isActive) {
        backgroundColor = 'lightpink'
    } else if (canDrop) {
        backgroundColor = 'lightgreen'
    }

    return (
        <div ref={drop} role={'Dropzone'} style={{...style, backgroundColor}}>
            <TextField sx={{width: 750}} label="tittel" value={inputValue} onChange={event => setInputValue(event.target.value as string)}/>
            <Typography>{value}</Typography>
            <Typography>{inputValue}</Typography>
        </div>
    );
}
