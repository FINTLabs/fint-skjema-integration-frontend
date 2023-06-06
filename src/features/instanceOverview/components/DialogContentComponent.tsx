import * as React from "react";
import {Box, Typography} from "@mui/material";
import {getErrorArgs, IErrorArg, stringReplace} from "../../util/StringUtil";
import {IError, IEvent} from "../../log/types/Event";
import {useTranslation} from "react-i18next";
import {dialogSX} from "../../configuration/styles/SystemStyles";

type Props = {
    row: IEvent | undefined
}

const DialogContentComponent: React.FunctionComponent<Props> = (props: Props) => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.instanceOverview'});

    return (
        <>
            {props.row &&
                <Box id={props.row.type + `-panel`} sx={dialogSX}>
                    <Typography>{props.row.errors.length > 1 ? "Feilmeldinger:" : "Feilmelding:"}</Typography>
                    <ol style={{fontFamily: 'sans-serif'}}>
                        {props.row.errors.map((error: IError, index: number) => {
                            let errorArgs: IErrorArg[] = getErrorArgs(error)
                            return <li key={index}>
                                <Typography>
                                    {stringReplace(t(error.errorCode), errorArgs)}
                                </Typography>
                            </li>
                        })}
                    </ol>
                </Box>}
        </>
    )
}

export default DialogContentComponent;
