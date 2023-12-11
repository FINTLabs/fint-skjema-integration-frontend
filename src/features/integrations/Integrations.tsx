import React, {useContext, useEffect, useState} from "react";
import IntegrationTable from "./components/IntegrationTable";
import {IntegrationContext} from "../../context/IntegrationContext";
import PageTemplate from "../../components/templates/PageTemplate";
import {SourceApplicationContext} from "../../context/SourceApplicationContext";
import {RouteComponent} from "../../routes/Route";
import {Box, Heading, HelpText, HStack, Loader} from "@navikt/ds-react";
import ConfigurationRepository from "../../api/ConfigurationRepository";
import {IConfiguration} from "../configuration/types/Configuration";
import {useTranslation} from "react-i18next";


const Integrations: RouteComponent = () => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations'})
    const {integrations, getAllIntegrations} = useContext(IntegrationContext)
    const {allMetadata, getAllMetadata} = useContext(SourceApplicationContext)
    const [configs, setConfigs] = useState<IConfiguration[]>([]);
    const [completedConfigs, setCompletedConfigs] = useState<IConfiguration[]>([]);


    useEffect(() => {
        getAllIntegrations();
        getAllMetadata(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        integrations && getAllConfigurations(0, 10000, "version", "DESC", true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [integrations]);

    const getAllConfigurations = async (page: number, size: number, sortProperty: string, sortDirection: string, excludeElements?: boolean) => {
        if (integrations) {
            try {
                const configs = []
                const completedConfigs = []
                for (const integration of integrations ?? []) {
                    const configResponse = await ConfigurationRepository.getConfigurations(page, size, sortProperty, sortDirection, false, integration.id ?? '', excludeElements)
                    const completedConfigResponse = await ConfigurationRepository.getConfigurations(page, size, sortProperty, sortDirection, true, integration.id ?? '', excludeElements)
                    configs.push(configResponse.data.content)
                    completedConfigs.push(completedConfigResponse.data.content)
                }

                const allConfigs = configs.reduce((acc, currentArray) => [...acc, ...currentArray], []) || [];
                const allCompletedConfigs = completedConfigs.reduce((acc, currentArray) => [...acc, ...currentArray], []) || [];

                setConfigs(allConfigs)
                setCompletedConfigs(allCompletedConfigs)

            } catch (e) {
                console.error('Error: ', e);
            }
        } else {
            setConfigs([])
            setCompletedConfigs([])
        }
    }

    return (
        <PageTemplate id={'integration'} keyPrefix={'pages.integrations'} wide customHeading>
            <HStack id={'instances-custom-header'} align={"center"} gap={"2"}>
                <Heading size={"medium"}>{t('header')}</Heading>
                <HelpText title={"Hva er dette"} placement="bottom">
                    {t('help.header')}
                </HelpText>
            </HStack>
            <Box id={"integration-table-container"} background={"surface-default"} padding="6" borderRadius={"large"}
                 borderWidth="2" borderColor={"border-subtle"}>
                {integrations && allMetadata && configs && completedConfigs ?
                    <IntegrationTable allConfigs={configs} allCompletedConfigs={completedConfigs}
                                      integrations={integrations}/>
                    :
                    <>
                        <Loader size={"xlarge"}/>
                    </>
                }
            </Box>
        </PageTemplate>
    );
}

export default Integrations;
