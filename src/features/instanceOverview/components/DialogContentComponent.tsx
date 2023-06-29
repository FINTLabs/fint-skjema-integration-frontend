import * as React from "react";
import {Box, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {dialogSX} from "../../../util/styles/SystemStyles";
import {IError, IErrorArg, IEvent} from "../types/Event";
import {errorStringReplace, getErrorArgs} from "../../../util/StringUtil";

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
                    <ol id={'error-list'} style={{fontFamily: 'sans-serif'}}>
                        {props.row.errors.map((error: IError, index: number) => {
                            const errorArgs: IErrorArg[] = getErrorArgs(error)
                            return <li id={'error'} key={index}>
                                <Typography>
                                    {errorStringReplace(t(error.errorCode), errorArgs)}
                                </Typography>
                            </li>
                        })}
                    </ol>
                </Box>}
        </>
    )
}

export default DialogContentComponent;
