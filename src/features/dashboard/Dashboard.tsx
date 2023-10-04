import {Box, Card, CardContent} from '@mui/material';
import React, {useContext, useEffect} from 'react';
import {IntegrationContext} from "../../context/integrationContext/IntegrationContext";
import IntegrationTable from "../integrationOverview/components/IntegrationTable";
import DashboardCard from "./DashboardCard";
import {ICard} from "./types/Card";
import {useTranslation} from "react-i18next";
import {SourceApplicationContext} from "../../context/SourceApplicationContext";
import {DashboardStyles} from "../../util/styles/Dashboard.styles";
import {IIntegrationStatistics} from "./types/IntegrationStatistics";
import {RouteComponent} from "../main/Route";

const useStyles = DashboardStyles;

const Dashboard: RouteComponent = () => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.dashboard'});
    const classes = useStyles();
    const {statistics, resetIntegrations, integrations, getIntegrations} = useContext(IntegrationContext)
    const {sourceApplication} = useContext(SourceApplicationContext)
    const activeIntegrations = integrations?.filter(integration => integration.state === 'ACTIVE') || [];
    let totalErrors = 0;
    let totalDispatched = 0;
    const totalActive = activeIntegrations.length;
    statistics?.map((stat: IIntegrationStatistics) => {
        totalErrors += stat.currentErrors;
        totalDispatched += stat.dispatchedInstances;
    })

    useEffect(() => {
        getIntegrations(sourceApplication ? sourceApplication.toString() : "2");
        resetIntegrations();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const cards: ICard[] = [
        {
            value: integrations === undefined || integrations.length === 0 ? t('empty') : integrations.length.toString(),
            content: integrations !== undefined && integrations.length === 1 ? t('oneIntegration') : t('integrations'),
            links: [
                {name: t('links.integration'), href: '/integration/new'}
            ]
        },
        {
            value: totalActive === 0 ? t('empty') : totalActive.toString(),
            content: totalActive === 1 ? t('oneActiveIntegration') : t('activeIntegrations'),
            links: [
                {name: t('links.integrationOverview'), href: '/integration/list'}
            ]
        },
        {
            value: totalDispatched === 0 ? t('empty') : totalDispatched.toString(),
            content: totalDispatched === 1 ? t('oneInstance') : t('instances'),
            links: [
                {name: t('links.instanceOverview'), href: '/integration/instance/list'}
            ]
        },
        {
            value: totalErrors === 0 ? t('empty') : totalErrors.toString(),
            content: totalErrors === 1 ? t('oneError') : t('errors'),
            links: [
                {name: t('links.instanceOverview'), href: '/integration/instance/list'}
            ]
        }
    ]

    return (
        <Box>
            <Box id={'dashboard-card-container'} display="flex" position="relative" width={1} height={1}>
                {cards.map((card: ICard, index) => {
                    return (
                        <DashboardCard
                            key={index}
                            id={`dashboard-card-` + index}
                            value={card.value}
                            content={card.content}
                            links={card.links}
                            classes={classes}
                        />)
                })}
            </Box>
            <Card className={classes.card} sx={{mt: 4}}>
                <CardContent>
                    <IntegrationTable
                        classes={classes}
                    />
                </CardContent>
            </Card>
        </Box>
    );
}

export default Dashboard;