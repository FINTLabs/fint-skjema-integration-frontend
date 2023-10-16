import { createCommonStyles } from './theme/theme';
import {createStyles, makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

export const valueConvertingStyles = makeStyles((theme: Theme) =>
    createStyles({
        ...createCommonStyles(theme), 
        valueConvertingBox: {
            height: theme.spacing(75),
            width: '85%',
            backgroundColor: 'white',
            border: 'solid 1px',
            borderColor: 'black',
            borderRadius: theme.spacing(0.5),
        },
        configurationBox: {
            width: theme.spacing(44)
        },
        headerContainer: {
            display: 'flex',
            width: theme.spacing(44),
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        panelContainer: {
            backgroundColor: 'white',
            padding: theme.spacing(2),
            border: 'solid 1px',
            borderColor: 'black',
            marginLeft: theme.spacing(1),
            borderRadius: theme.spacing(0.5),
            height: 'fit-content',
        },
        title: {
            fontFamily: ["Nunito Sans", 'sans-serif'].join(','),
            padding: 0,
            fontSize: theme.spacing(2),
            marginTop: theme.spacing(0)
        },
        title4: {
            fontFamily: ["Nunito Sans", 'sans-serif'].join(','),
            fontSize: theme.spacing(2),
            padding: 0,
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(2),
            fontWeight: 'normal'
        },
        listBorderless: {
            listStyle: 'none',
            padding: 'unset',
            margin: 'unset',
            border: 'none'
        },
        listItem: {
            paddingBottom: theme.spacing(2)
        },

        wrapperVerticalMargin: {
            marginBottom: theme.spacing(2)
        },
        valueConvertingWrapper: {
            display: 'grid',
            border: 'none',
            margin: '0',
            padding: '0'
        },
        
    })
);