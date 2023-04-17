import React, {useContext, useEffect, useState} from 'react';
import {RouteComponentProps, useHistory, withRouter} from 'react-router-dom';
import {SourceApplicationContext} from "../../context/sourceApplicationContext";
import OutgoingDataComponent from "./components/OutgoingDataComponent";
import {Controller, FormProvider, useForm} from "react-hook-form";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import IncomingDataComponent from "./components/IncomingDataComponent";
import {Alert, Box, Checkbox, FormControlLabel, Snackbar, Typography} from "@mui/material";
import {IntegrationContext} from "../../context/integrationContext";
import {IIntegrationMetadata} from "./types/Metadata/IntegrationMetadata";
import {useTranslation} from "react-i18next";
import {configurationFormStyles} from "./styles/ConfigurationForm.styles";
import CheckboxValueComponent from "./components/common/CheckboxValueComponent";
import IntegrationRepository from "../../shared/repositories/IntegrationRepository";
import {IConfiguration, IConfigurationPatch, IObjectMapping} from "./types/Configuration";
import {IIntegrationPatch, IntegrationState} from "../integration/types/Integration";
import {ConfigurationContext} from "../../context/configurationContext";
import SelectValueComponent from "./components/mapping/value/select/SelectValueComponent";
import StringValueComponent from "./components/mapping/value/string/StringValueComponent";
import {IAlertContent} from "./types/AlertContent";
import {activeAlert, completedAlert, defaultAlert, savedAlert} from "./defaults/DefaultValues";
import ConfigurationRepository from "../../shared/repositories/ConfigurationRepository";
import {pruneObjectMapping} from "../util/mapping/helpers/pruning";
import EditingProvider, {EditingContext} from "../../context/editingContext";

const useStyles = configurationFormStyles

const ConfigurationForm: React.FunctionComponent<RouteComponentProps<any>> = () => {
    const {setSourceApplication, allMetadata} = useContext(SourceApplicationContext)
    const {
        completed,
        setCompleted,
        resetConfigurationContext
    } = useContext(ConfigurationContext)
    const {setEditCollectionAbsoluteKey} = useContext(EditingContext)
    const {t} = useTranslation('translations', {keyPrefix: 'pages.configuration'});
    const history = useHistory();
    const classes = useStyles();
    const {
        selectedMetadata,
        existingIntegration,
        configuration,
        setConfiguration,
        resetIntegrationContext
    } = useContext(IntegrationContext)
    const [active, setActive] = useState<boolean>(existingIntegration?.activeConfigurationId === configuration?.id)
    const [showAlert, setShowAlert] = React.useState<boolean>(false)
    const [alertContent, setAlertContent] = React.useState<IAlertContent>(defaultAlert)
    const [collectionReferencesInEditContext, setCollectionReferencesInEditContext] = useState<string[]>([])

    if (!existingIntegration) {
        history.push('/')
    }
    const methods = useForm({
        defaultValues: configuration
            ? {...configuration}
            : {
                integrationId: existingIntegration?.id,
                integrationMetadataId: selectedMetadata.id,
                completed: false
            }
    });

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlert(false);
        setAlertContent(defaultAlert)
    };

    useEffect(() => {
        if (configuration?.completed) {
            setCompleted(true)
        }
        return () => {
            resetIntegrationContext()
            resetConfigurationContext()
            setSourceApplication(undefined)
            setEditCollectionAbsoluteKey("")
        }
    }, [])


    const onSubmit = (data: any) => {
        data.mapping = pruneObjectMapping(data.mapping as IObjectMapping)
        if (configuration?.id) {
            ConfigurationRepository.updateConfiguration(configuration.id.toString(), data as IConfigurationPatch)
                .then(response => {
                    console.log('updated', response)
                    if (!response.data.completed) {
                        setAlertContent(savedAlert)
                        setShowAlert(true);
                    }
                    if (response.data.completed && !active) {
                        if (response.data.completed) {
                            setAlertContent(completedAlert)
                            setShowAlert(true);
                            setCompleted(true)
                        }
                    }
                    if (active && existingIntegration) {
                        activateConfiguration(existingIntegration.id, response.data)
                    }
                }).catch(function (error) {
                    if (error.response?.status) {
                        setAlertContent({
                            severity: 'error',
                            message: 'Feilet under lagring, feilmelding: ' + (error.response.data.message ? error.response.data.message : 'Det har oppstått en feil') + ', status: ' + error.response.status
                        })
                        setShowAlert(true);
                    }
                }
            )
        } else {
            ConfigurationRepository.createConfiguration(data as IConfiguration)
                .then(response => {
                    console.log('created', response)
                    setConfiguration(response.data)
                    if (!response.data.completed) {
                        setAlertContent(savedAlert)
                        setShowAlert(true);
                    }
                    if (response.data.completed && !active) {
                        setAlertContent(completedAlert)
                        setShowAlert(true);
                        setCompleted(true)
                    }
                    if (active && existingIntegration) {
                        activateConfiguration(existingIntegration.id, response.data)
                    }
                }).catch(function (error) {
                if (error.response?.status) {
                    setAlertContent({
                        severity: 'error',
                        message: 'Feilet under lagring, feilmelding: ' + (error.response.data.message ? error.response.data.message : 'Det har oppstått en feil') + ', status: ' + error.response.status
                    })
                    setShowAlert(true);
                }
            })
        }
    };

    function activateConfiguration(integrationId: string, configuration: IConfiguration) {
        const patch: IIntegrationPatch = {
            activeConfigurationId: configuration.id.toString(),
            state: IntegrationState.ACTIVE,
            destination: existingIntegration?.destination
        }
        IntegrationRepository.updateIntegration(integrationId, patch)
            .then(response => {
                setAlertContent(activeAlert)
                setShowAlert(true);
                setCompleted(true)
                console.log('set active configuration: ', response.data.activeConfigurationId)
            }).catch((e) => {
            console.log('could not set active configuration', e)
        })
    }

    const availableVersions: IIntegrationMetadata[] = allMetadata.filter(md => {
        return md.sourceApplicationId === selectedMetadata.sourceApplicationId &&
            md.sourceApplicationIntegrationId === selectedMetadata.sourceApplicationIntegrationId
    })

    return (
        <DndProvider backend={HTML5Backend}>
            <EditingProvider>
                <FormProvider {...methods}>
                    <form id="react-hook-form" onSubmit={methods.handleSubmit(onSubmit)}>
                        <Box className={classes.configurationBox} sx={{m: 1}}>
                            <Typography sx={{m: 1}} variant={"h6"}>{t('header')}</Typography>
                            <Typography sx={{m: 1}}>
                                Integrasjon: {existingIntegration?.sourceApplicationIntegrationId} - {existingIntegration?.displayName}
                            </Typography>
                            <Controller
                                name={"integrationMetadataId".toString()}
                                defaultValue={''}
                                render={({field}) =>
                                    <SelectValueComponent
                                        {...field}
                                        displayName={t('metadataVersion')}
                                        selectables={
                                            availableVersions.map(metadata => {
                                                return {
                                                    displayName: metadata.version.toString(),
                                                    value: metadata.id ? metadata.id.toString() : "0"
                                                }
                                            })}
                                    />
                                }
                            />
                            <Controller
                                name={"comment".toString()}
                                render={({field}) =>
                                    <StringValueComponent
                                        {...field}
                                        classes={classes}
                                        displayName={"Kommentar"}
                                        multiline
                                    />
                                }
                            />
                        </Box>
                        <Box display="flex" position="relative" width={1} height={1} sx={{border: 'none'}}>
                            <IncomingDataComponent
                                classes={classes}
                                referencesForCollectionsToShow={collectionReferencesInEditContext}
                            />
                            <OutgoingDataComponent
                                classes={classes}
                                onCollectionReferencesInEditContextChange={
                                    (collectionReferences: string[]) => {
                                        setCollectionReferencesInEditContext(collectionReferences)
                                    }}
                            />
                        </Box>
                        <Box className={classes.formFooter}>
                            <button id="form-submit-btn" className={classes.submitButton}
                                    disabled={configuration?.completed} type="submit" onClick={onSubmit}>
                                {t("button.submit")}
                            </button>
                            <button id="form-cancel-btn" className={classes.submitButton} type="button"
                                    onClick={() => {
                                        history.push('/')
                                    }}
                            >{t("button.cancel")}
                            </button>

                            <FormControlLabel
                                label={t('label.checkLabel')}
                                control={
                                    <Controller
                                        name={"completed"}
                                        render={({field}) =>
                                            <CheckboxValueComponent
                                                {...field}
                                                classes={classes}
                                                displayName={t('label.checkLabel')}
                                            />
                                        }
                                    />
                                }
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id="form-active"
                                        checked={active}
                                        disabled={completed}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setActive(event.target.checked)
                                        }}
                                        inputProps={{'aria-label': 'active-checkbox'}}/>}
                                label={t('label.activeLabel') as string}
                            />
                        </Box>
                        <Snackbar id="integration-form-snackbar-saved" autoHideDuration={4000} open={showAlert}
                                  onClose={handleClose}>
                            <Alert onClose={handleClose} severity={alertContent.severity} sx={{width: '100%'}}>
                                {alertContent.message}
                            </Alert>
                        </Snackbar>
                    </form>
                </FormProvider>
            </EditingProvider>

        </DndProvider>
    );
}

export default withRouter(ConfigurationForm);