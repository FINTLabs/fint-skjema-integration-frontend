import * as React from "react";
import {ReactElement, useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {IntegrationContext} from "../../../context/IntegrationContext";
import {Link as RouterLink, useHistory} from 'react-router-dom';
import {SourceApplicationContext} from "../../../context/SourceApplicationContext";
import {IIntegration, IIntegrationPatch} from "../../integration/types/Integration";
import {IConfiguration} from "../../configuration/types/Configuration";
import {
	Alert,
	BodyLong,
	BodyShort,
	Box,
	Button,
	Dropdown,
	HGrid,
	HStack,
	Label,
	Modal,
	Table,
	VStack
} from "@navikt/ds-react";
import {MenuElipsisVerticalCircleIcon, PencilWritingIcon} from '@navikt/aksel-icons';
import IntegrationRepository from "../../../api/IntegrationRepository";
import ConfigurationRepository from "../../../api/ConfigurationRepository";

type Props = {
    integration: IIntegration,
    completedC: IConfiguration[]
    draftC: IConfiguration[]
}

const IntegrationPanel: React.FunctionComponent<Props> = (props: Props) => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations'});
    const history = useHistory();
    const {
        setConfiguration,
        setSelectedMetadata,
        setExistingIntegration
    } = useContext(IntegrationContext);
    const {
        allMetadata,
        setSourceApplication,
        getInstanceElementMetadata,
    } = useContext(SourceApplicationContext)
    const [activeVersion, setActiveVersion] = useState<string>('');
    const [openDialog, setOpenDialog] = React.useState(false);
    const [configToActivate, setConfigToActivate] = React.useState<string>('')

    useEffect(() => {
        setSourceApplication(Number(props.integration.sourceApplicationId) ?? 1);
        getVersionForActiveConfig(props.integration?.activeConfigurationId ? props.integration.activeConfigurationId : undefined)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getVersionForActiveConfig(id: string | undefined): void {
        if (id === undefined) {
            setActiveVersion('ingen aktiv konfigurasjon')
            return;
        }
        ConfigurationRepository.getConfigurationById(id.toString(), true)
            .then((response) => {
                const data: IConfiguration = response.data;
                if (data) {
                    setActiveVersion(t('version') + data.version)
                }
            })
            .catch((e) => {
                console.error('Error: ', e)
                setActiveVersion('ingen aktiv konfigurasjon')
            })
    }

    async function handleNewOrEditConfigClick(id: number | string, version?: unknown) {
        setExistingIntegration(props.integration)
        await ConfigurationRepository.getConfigurationById(id.toString(), false)
            .then(async (response) => {
                const data = response.data
                const usedVersionMetadata = allMetadata?.filter(md => md.id === data.integrationMetadataId)
                setSelectedMetadata(usedVersionMetadata ? usedVersionMetadata[0] : undefined)
                if (version) {
                    data.id = undefined;
                    data.comment = undefined
                    data.completed = false;
                }
                setConfiguration(data);
            })
            .catch((e) => {
                console.error('Error: ', e)
                setConfiguration(undefined);
            })
    }

    const activateConfiguration = (configurationId: string) => {
        const patch: IIntegrationPatch = {
            activeConfigurationId: configurationId,
            state: 'ACTIVE'
        }
        if (props.integration?.id) {
            IntegrationRepository.updateIntegration(props.integration?.id, patch).then(
                (response) => {
                    console.log('updated integration: ', props.integration?.id, response)
                }
            ).catch(e => console.error(e))
            setActiveVersion('ingen aktiv konfigurasjon')
            console.log('set active config, integrationId', props.integration?.id, 'configurationId', configurationId)
        }

    }

    function configTable(configs: IConfiguration[], completed: boolean): ReactElement {
        // tslint-ignore-next-line
        return configs.length > 0 ? <Table size={"small"}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell scope="col">Konfig. ID</Table.HeaderCell>
                        {completed && <Table.HeaderCell scope="col">Versjon</Table.HeaderCell>}
                        <Table.HeaderCell scope="col">Kommentar</Table.HeaderCell>
                        <Table.HeaderCell scope="col">Handlinger</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {configs?.map((value, i) => {
                        return (
                            <Table.Row key={i}>
                                <Table.DataCell>{value.id}</Table.DataCell>
                                {completed && <Table.DataCell>{value.version}</Table.DataCell>}
                                <Table.DataCell>{value.comment}</Table.DataCell>
                                <Table.DataCell>
                                    {actionMenu(value)}
                                </Table.DataCell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
            : <BodyShort>Ingen elementer</BodyShort>
    }


    function actionMenu(config: IConfiguration): ReactElement {
        return (
            <div className="min-h-32">
                {config.completed ?
                    <Dropdown>
                        <Button as={Dropdown.Toggle} variant="tertiary-neutral"
                                icon={<MenuElipsisVerticalCircleIcon aria-hidden/>}/>
                        <Dropdown.Menu>
                            <Dropdown.Menu.GroupedList>
                                <Dropdown.Menu.GroupedList.Item onClick={() => {
                                    handleNewOrEditConfigClick(config.id).then(() => history.push("/integration/configuration/edit"))
                                }}>
                                    Vis
                                </Dropdown.Menu.GroupedList.Item>
                                <Dropdown.Menu.GroupedList.Item onClick={() => {
                                    handleNewOrEditConfigClick(config.id, config.version).then(() => history.push("/integration/configuration/edit"))
                                }}>
                                    Lag ny basert på denne
                                </Dropdown.Menu.GroupedList.Item>
                            </Dropdown.Menu.GroupedList>
                            <Dropdown.Menu.Divider/>
                            <Dropdown.Menu.List>
                                <Dropdown.Menu.List.Item onClick={() => {
                                    handleActivateAction(config.id.toString())
                                }}>
                                    Aktiver
                                </Dropdown.Menu.List.Item>
                            </Dropdown.Menu.List>
                        </Dropdown.Menu>
                    </Dropdown>
                    :
                    <Button variant="tertiary-neutral" icon={<PencilWritingIcon aria-hidden/>} onClick={() => {
                        handleNewOrEditConfigClick(config.id).then(() => history.push("/integration/configuration/edit"))
                    }}>
                    </Button>
                }
            </div>
        );
    }

    const handleActivateAction = (configId: string) => {
        setOpenDialog(true)
        setConfigToActivate(configId)
    }

    return (
        <Box>
            <Modal
                open={openDialog}
                onClose={() => setOpenDialog(false)
                }
                header={{
                    heading: "Aktiver",
                    size: "small",
                    closeButton: false,
                }}
                width="small"
            >
                <Modal.Body>
                    <BodyLong>
                        Er du sikker på at du vil aktivere denne konfigurasjonen?
                    </BodyLong>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" variant="danger" onClick={() => {
                        getVersionForActiveConfig(configToActivate)
                        activateConfiguration(configToActivate)
                        setOpenDialog(false)
                    }}>
                        Ja, jeg er sikker
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() => setOpenDialog(false)}
                    >
                        Avbryt
                    </Button>
                </Modal.Footer>
            </Modal>
            <VStack gap="4">
                <Label>{t('labels.activeConfigurationId')} {activeVersion}</Label>
                <HGrid gap="6" columns={2}>
                    <Box padding="4" background={"surface-subtle"} borderRadius="xlarge"
                         style={{maxHeight: '440px', overflow: "auto"}}>
                        <BodyShort>{t('table.completed')}:</BodyShort>
                        {configTable(props.completedC, true)}
                    </Box>
                    <Box padding="4" background={"surface-subtle"} borderRadius="xlarge"
                         style={{height: 'fit-content', maxHeight: '440px', overflow: "auto"}}>
                        <BodyShort>{t('table.drafts')}:</BodyShort>
                        {configTable(props.draftC, false)}
                    </Box>
                </HGrid>
                <HStack gap={"6"}>
                    <Box>
                        <Button
                            id="new-configuration-button"
                            disabled={!allMetadata}
                            as={RouterLink}
                            to='/integration/configuration/new-configuration'
                            onClick={() => {
                                setExistingIntegration(props.integration)
                                const selectedForm = allMetadata ? allMetadata.filter(md => md.sourceApplicationIntegrationId === props.integration?.sourceApplicationIntegrationId) : []
                                setSelectedMetadata(selectedForm.length > 0 ? selectedForm[selectedForm.length - 1] : undefined)
                                getInstanceElementMetadata(selectedForm[selectedForm.length - 1].id)
                            }}
                        >
                            Ny konfigurasjon
                        </Button>
                    </Box>
                    {!allMetadata &&
                        <Alert size="small" variant="warning">Mangler tilstrekkelig data for å kunne opprette ny
                            konfigurasjon </Alert>}
                </HStack>
            </VStack>
        </Box>
    );
}

export default IntegrationPanel;