import {FC} from 'react'
import {useDrag} from 'react-dnd'
import {DraggableTypes} from './DraggableTypes'
import {Chip} from "@mui/material";
import {ITag} from "../../types/Tag";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import NumbersIcon from '@mui/icons-material/Numbers';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import WarningIcon from '@mui/icons-material/Warning';
import {Type} from "../../types/IntegrationMetadata";

export const Tag: FC<ITag> = function Tag({ name, value , type}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: DraggableTypes.TAG,
        item: {name, value},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }))

    function typeToIcon(type: Type) {
        if (type === Type.STRING) {
            return <TextFieldsIcon/>
        }
        if (type === Type.FILE) {
            return <InsertDriveFileIcon/>
        }
        if (type === Type.INTEGER) {
            return <NumbersIcon/>
        }
        if (type === Type.UNKNOWN) {
            return <WarningIcon/>
        }
    }

    console.log(type)


    const opacity = isDragging ? 0.4 : 1
    return (
        <Chip
            sx={{borderRadius: '4px'}}
            icon={
            <>
                <DragIndicatorIcon />
                {typeToIcon(type)}
            </>
            }
            ref={drag}
            variant="outlined"
            role="Tag"
            label={name}
            style={{ cursor: 'move', backgroundColor: 'white', margin:8, opacity }}
        />
    )
}
