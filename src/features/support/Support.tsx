import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import {useTranslation} from 'react-i18next';
import StatusComponent from "./components/StatusComponent";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {SupportStyles} from "../../util/styles/Support.styles";


const useStyles = SupportStyles

const Support: React.FunctionComponent<RouteComponentProps<any>> = () => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.support'});
    const classes = useStyles();
    const view: boolean = false;
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return view ? (
        <>
            <Typography variant={"h6"}>{t('header')}</Typography>
            <Box sx={{mt: 2}}>
                <Accordion disableGutters={true} sx={{mb: 2}} expanded={expanded === 'panel1'}
                           onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{width: '33%', flexShrink: 0}}>
                            Brukerveiledning
                        </Typography>
                        <Typography sx={{color: 'text.secondary'}}>Hvordan bruke FINT Flyt</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Kommer
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion disableGutters={true} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{width: '33%', flexShrink: 0}}>Tjenester</Typography>
                        <Typography sx={{color: 'text.secondary'}}>
                            Status på tjenester brukt av FINT Flyt
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <StatusComponent classes={classes}/>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </>
    ) : (<>
            <Typography variant={"h6"}>{t('header')}</Typography>
        </>
    );
}

export default withRouter(Support);