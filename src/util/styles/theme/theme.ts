import {createTheme, Theme} from "@mui/material";
import {nbNO} from '@mui/material/locale';

const theme = createTheme(
    {
        palette: {
            secondary: {
                light: '#7fb434',
                main: '#5FA202',
                dark: '#427101',
            },
            primary: {
                light: '#4b727a',
                main: '#1F4F59',
                dark: '#15373e',
            },
            background: {
                default: '#EBF4F5',
            }
        },
        spacing: 8,
        typography: {
            fontFamily: [
                "Roboto", 'sans-serif'
            ].join(','),
            button: {
                textTransform: 'none',
                font: "Roboto",
                fontSize: 16
            }
        }
    },
    nbNO
);


export const useCommonStyles = (theme: Theme) => {
    return {
        dataGridBox: {
            height: theme.spacing(80),
            backgroundColor: 'white',
            borderRadius: theme.spacing(0.5),
            width: '100%',
        },
        panelContainer: {
            backgroundColor: 'white',
            padding: theme.spacing(2),
            border: 'solid 1px',
            borderColor: 'lightgrey',
            marginLeft: theme.spacing(1),
            borderRadius: theme.spacing(0.5),
            height: 'fit-content',
        },
        form: {
            width: theme.spacing(120),
        },
        row: {
            display: 'flex',
        },
        flex: {
            flex: 1
        },
        title: {
            fontFamily: ["Roboto", 'sans-serif'].join(','),
            padding: 0,
            fontSize: theme.spacing(2),
            marginTop: theme.spacing(0)
        },
        title1: {
            fontFamily: ["Roboto", 'sans-serif'].join(','),
            fontSize: theme.spacing(3),
            padding: 0,
            marginTop: theme.spacing(0),
            fontWeight: 'normal'
        },

        title2: {
            fontFamily: ["Roboto", 'sans-serif'].join(','),
            fontSize: theme.spacing(2.6),
            padding: 0,
            marginTop: theme.spacing(0),
            fontWeight: 'normal'
        },
        title3: {
            fontFamily: ["Roboto", 'sans-serif'].join(','),
            fontSize: theme.spacing(2.2),
            padding: 0,
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(2),
            fontWeight: 'normal'
        },
        title4: {
            fontFamily: ["Roboto", 'sans-serif'].join(','),
            fontSize: theme.spacing(2),
            padding: 0,
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(2),
            fontWeight: 'normal'
        },
        titleMarginStyle: {
            marginBottom: '10px',
        },
        submitButton: {
            backgroundColor: theme.palette.primary.main,
            borderRadius: theme.spacing(0.5),
            color: 'white',
            cursor: 'pointer',
            padding: theme.spacing(1),
            fontSize: theme.spacing(2),
            marginTop: theme.spacing(2),
            marginRight: theme.spacing(2),
            width: 'fit-content',
            height: 'fit-content',
            "&:disabled": {
                cursor: 'auto',
                backgroundColor: 'lightgray',
                color: 'gray'
            },
            "&:last-child": {
                marginLeft: theme.spacing(2)
            }
        },
        card: {
            border: 'solid 1px',
            marginRight: theme.spacing(2),
            borderColor: theme.palette.primary.main
        }
    };
};


export default theme;