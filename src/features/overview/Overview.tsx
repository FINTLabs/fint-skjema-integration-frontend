import {Breadcrumbs, Theme, Typography} from '@mui/material';
import React, {useContext, useEffect, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {createStyles, makeStyles} from "@mui/styles";
import IntegrationConfigurationDetails from "./components/IntegrationConfigurationDetails";
import IntegrationConfigurationTable from "./components/IntegrationConfigurationTable";
import {IntegrationContext} from "../../context/integrationContext";
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            width: theme.spacing(120)
        },
        row: {
            display: 'flex'
        },
        dataGridBox: {
            height: "750px",
            width: '100%'
        }
    })
);

const Overview: React.FunctionComponent<RouteComponentProps<any>> = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'pages.integrationList'});
    const classes = useStyles();
    const showDetails: boolean = window.location.pathname === '/integration/configuration/details'
    const {integration, setIntegration, integrations, getIntegrations} = useContext(IntegrationContext)
    const [initialVersion, setInitialVersion] = useState(integration.version);

    useEffect(()=> {
        getIntegrations();
    }, []);

    const resetConfiguration = () => {
        setIntegration({})
        getIntegrations();
    }

    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography style={{cursor:'pointer'}} onClick={resetConfiguration}>{t('header')}</Typography>
                <Typography>{integration.sourceApplicationIntegrationId && showDetails ? t('details') : ''}</Typography>
            </Breadcrumbs>
            {integration.sourceApplicationIntegrationId && showDetails ?
                <IntegrationConfigurationDetails
                    reset={resetConfiguration}
                    initialConfiguration={integration}
                    initialVersion={initialVersion}
                /> :
                <IntegrationConfigurationTable
                    classes={classes}
                    loading={integrations.length === 0}
                    configurations={integrations}
                    setIntegration={setIntegration}
                    setInitialVersion={setInitialVersion}
                />
            }
        </>
    );
}

export default withRouter(Overview);
