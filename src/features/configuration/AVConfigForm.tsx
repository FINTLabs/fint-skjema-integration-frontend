import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Link as RouterLink, RouteComponentProps, useHistory, withRouter} from "react-router-dom";
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    IconButton,
    Snackbar,
    Theme,
    Typography
} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import {IFormConfiguration} from "./types/Form/FormData";
import {
    defaultConfigurationValuesAV,
    getDestinationDisplayName,
    getSourceApplicationDisplayName
} from "./defaults/DefaultValues";
import AccordionForm from "./components/AccordionForm";
import {ACCORDION_FORM, IAccordion} from "./types/Accordion";
import MetadataPanel from "./components/MetadataPanel";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {CreationStrategy} from "./types/CreationStrategy";
import {ResourcesContext} from "../../context/resourcesContext";
import {IntegrationContext} from "../../context/integrationContext";
import CloseIcon from '@mui/icons-material/Close';
import {useTranslation} from "react-i18next";
import InputField from "./components/form/InputField";
import {INPUT_TYPE} from "./types/InputType.enum";
import {
    toAVConfiguration,
    toAVConfigurationPatch,
} from "../util/mapping/AV/ToAVConfiguration";
import ConfigurationRepository from "../../shared/repositories/ConfigurationRepository";
import IntegrationRepository from "../../shared/repositories/IntegrationRepository";
import {IIntegrationPatch, IntegrationState} from "../integration/types/Integration";
import {SourceApplicationContext} from "../../context/sourceApplicationContext";
import {IConfiguration, IConfigurationPatch} from "./types/Configuration";
import {toAVFormData} from "../util/mapping/AV/toAVFormData";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            width: theme.spacing(100)
        },
        row: {
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
        },
        column: {
            flex: '50%',
            paddingLeft: theme.spacing(2)
        },
        buttonContainer: {
            padding: theme.spacing(2),
            height: 'fit-content',
            position: 'sticky',
            bottom: theme.spacing(0),
            zIndex: 1,
            width: '100%',
            backgroundColor: 'white'
        },
        metadataPanelContainer: {
            marginTop: theme.spacing(6),
            marginRight: theme.spacing(4),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            paddingTop: theme.spacing(2),
            border: 'solid 1px',
            borderColor: 'black',
            borderRadius: '4px',
            height: 'fit-content',
            position: 'sticky',
            top: theme.spacing(16),
            backgroundColor: 'white'
        },
        panelContainer: {
            display: 'flex',
            marginTop: theme.spacing(6),
            marginRight: theme.spacing(4),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            paddingBottom: theme.spacing(4),
            paddingTop: theme.spacing(2),
            border: 'solid 1px',
            borderColor: 'black',
            borderRadius: '4px',
            height: 'fit-content',
            position: 'sticky',
            top: theme.spacing(16),
            backgroundColor: 'white'
        },
        metadataPanel: {
            opacity: 0.99,
            border: 'solid 1px',
            borderRadius: '4px',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            width: theme.spacing(40),
            height: 'fit-content',
            overflow: 'auto',
            maxHeight: theme.spacing(100),
            backgroundColor: theme.palette.background.default

        },
        accordion: {
            marginBottom: theme.spacing(2),
            width: theme.spacing(100),
            backgroundColor: theme.palette.background.default,
        },
        accordionSummary: {
            backgroundColor: theme.palette.background.default,
        },
        formControl: {
            width: theme.spacing(70)
        },
        button: {
            marginRight: theme.spacing(1)
        },
        submitButton: {
            backgroundColor: theme.palette.primary.dark,
            border: 'none',
            color: 'white',
            padding: theme.spacing(2),
            cursor: 'pointer'
        }
    })
);

const AVConfigForm: React.FunctionComponent<RouteComponentProps<any>> = () => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.configurationForm'});
    const classes = useStyles();
    const editConfig: boolean = /edit$/.test(window.location.pathname)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const {id, newIntegration, existingIntegration, setExistingIntegration, setNewIntegration, selectedMetadata, configuration, setConfiguration, resetIntegrationContext, getNewIntegrations} = useContext(IntegrationContext);
    const {sourceApplication} = useContext(SourceApplicationContext)
    const [saved, setSaved] = React.useState(false);
    const [saveError, setSaveError] = React.useState(false);
    const [saveMessage, setSaveMessage] = React.useState<string>(t('messages.error'));
    const [checked, setChecked] = React.useState(configuration && editConfig ? configuration.completed : false);
    const [activeChecked, setActiveChecked] = React.useState(false);
    let history = useHistory();
    let activeIntegration = (editConfig || (!editConfig && existingIntegration)) ? existingIntegration : newIntegration;
    let activeConfiguration = configuration && editConfig ? configuration : undefined;
    const [activeConfigId, setActiveConfigId] = React.useState(activeConfiguration?.id);
    const [completed, setCompleted] = React.useState(!!activeConfiguration?.completed);
    let activeFormData = activeConfiguration && editConfig && configuration? toAVFormData(configuration) : defaultConfigurationValuesAV;
    const [shieldingCheck, setShieldingCheck] = React.useState(activeFormData?.recordData?.correspondent?.shielding?.accessCode !== null);
  const [isToggled, setIsToggled] = React.useState<boolean>(false);
    const toggle = React.useCallback(() => setIsToggled(prevState => !prevState), []);

    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        setActiveChecked(false);
    };
    const handleActiveCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveChecked(event.target.checked);
    };

    const {handleSubmit, watch, setValue, control, reset, formState, clearErrors} = useForm<IFormConfiguration>({
        defaultValues: activeFormData ? activeFormData : defaultConfigurationValuesAV,
        reValidateMode: 'onChange'
    });
    const { errors } = formState;

    const { getAllResources, resetAllResources } = useContext(ResourcesContext);

    useEffect(() => {
        getAllResources();
        return () => {
            setNewIntegration(undefined);
            setExistingIntegration(undefined);
            resetAllResources();
            resetIntegrationContext();
        };
    }, [])

    const accordionList: IAccordion[] = [
        {id: 'case-form', summary: "caseForm.header", accordionForm: ACCORDION_FORM.CASE, defaultExpanded: true},
        {id: 'record-form', summary: "recordForm.header", accordionForm: ACCORDION_FORM.RECORD, defaultExpanded: true}]


    const classAcc: IAccordion = {id: 'formpanel', summary: "classes.header", accordionForm: ACCORDION_FORM.CLASS, defaultExpanded: true}
    const partPanel: IAccordion = {id: 'part-panel', summary: "part.header", accordionForm: ACCORDION_FORM.PART, defaultExpanded: true}
    const correspondentPanel: IAccordion = {id: 'correspondent-panel', summary: "correspondentForm.header", accordionForm: ACCORDION_FORM.CORRESPONDENT, defaultExpanded: true}
    const documentPanel: IAccordion = {id: 'document-panel', summary: "documentForm.header", accordionForm: ACCORDION_FORM.DOCUMENT, defaultExpanded: true}
    const attachmentPanel: IAccordion = {id: 'attachment-panel', summary: "attachmentForm.header", accordionForm: ACCORDION_FORM.ATTACHMENT, defaultExpanded: true}

    const updateIntegration = (integrationId: string, configuration: any) => {
        let patch: IIntegrationPatch = {
            activeConfigurationId: configuration.id,
            state: IntegrationState.ACTIVE,
            destination: configuration.destination
        }
        IntegrationRepository.updateIntegration(integrationId, patch)
            .then(response => {
                console.log('set active configuration: ', response.data.activeConfigurationId, ' active: ')
            }).catch((e)=> {
            console.log('could not set active configuration', e)
        })
    }

    const saveNewConfiguration = (integrationId: string, data: IConfiguration) => {
        console.log('save new config', integrationId, data)
        ConfigurationRepository.createConfiguration(integrationId, data)
            .then(response => {
                console.log('created new configuration on integration ', integrationId, data, response);
                setConfiguration(response.data)
                setActiveConfigId(response.data.id)
                setSaved(true);
                getNewIntegrations(sourceApplication.toString());
            })
            .catch((e: Error) => {
                setSaveError(true);
                console.log('error creating new', e);
            });
    }

    const saveConfiguration = (integrationId: string, configurationId: string, data: IConfigurationPatch) => {
        console.log('save config', integrationId, configurationId, data)
        ConfigurationRepository.updateConfiguration(configurationId, data)
            .then(response => {
                console.log('updated configuration: ', configurationId, data, response);
                setSaved(true);
                getNewIntegrations(sourceApplication.toString());
            })
            .catch((e: Error) => {
                setSaveError(true);
                console.log('error updating configuration', e);
            });
    }

    const activateNewConfiguration = (integrationId: string, data: IConfiguration) => {
        console.log('publish new config', integrationId, data)
        ConfigurationRepository.createConfiguration(integrationId, data)
            .then(response => {
                console.log('created new configuration', data, response);
                if(activeChecked) {
                    updateIntegration(response.data.integrationId, response.data)
                }
                resetAllResources();
                setSubmitSuccess(true);
                getNewIntegrations(sourceApplication.toString());
            })
            .catch((e: Error) => {
                console.log('error creating new', e);
            });
    }

    const activateConfiguration = (integrationId: string, configurationId: string, data: IConfigurationPatch) => {
        console.log('publish config', configurationId, data)
        ConfigurationRepository.updateConfiguration(configurationId, data)
            .then(response => {
                if(activeChecked) {
                    updateIntegration(response.data.integrationId, response.data)
                }
                console.log('updated configuration: ', data, response);
                resetAllResources();
                setSubmitSuccess(true);
                getNewIntegrations(sourceApplication.toString());
            })
            .catch((e: Error) => {
                console.log('error updating configuration', e);
            });
    }

    const handleCancel = () => {
        history.push({
            pathname: '/',
        })
        setConfiguration({});
    }

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSaved(false);
        setSaveError(false);
        setSaveMessage(t('messages.error'))
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>{t('button.close')}</Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const onSubmit = handleSubmit((data: IFormConfiguration) => {
        if (data.caseData.caseCreationStrategy === CreationStrategy.BY_ID && id === undefined) {
            setSaveMessage(t('messages.errorId'))
            setSaveError(true)
            return;
        }
        if (data.caseData.caseCreationStrategy === CreationStrategy.BY_ID && id) {
            data.caseData.id = id
        }
        data.completed = true;
        if (!shieldingCheck) data.recordData.correspondent.shielding = {accessCode: null, paragraph: null};
        const configuration: IConfiguration = toAVConfiguration(data, activeIntegration?.id, activeConfigId, selectedMetadata.id);
        if (configuration && activeConfigId !== undefined) {
            const iConfiguration: IConfiguration = toAVConfigurationPatch(data, selectedMetadata.id);
            activateConfiguration(activeIntegration?.id, activeConfigId, iConfiguration)
            reset({ ...defaultConfigurationValuesAV })
        }
        else if (configuration && activeIntegration?.id) {
            activateNewConfiguration(activeIntegration?.id, configuration);
            reset({ ...defaultConfigurationValuesAV })
        } else {
            //TODO: Handle error
            return;
        }
    });

    const onSave = handleSubmit((data: IFormConfiguration) => {
        if (data.caseData.caseCreationStrategy === CreationStrategy.BY_ID && id) {
            data.caseData.id = id
        }
        data.completed = false;
        if (!shieldingCheck) data.recordData.correspondent.shielding = {accessCode: null, paragraph: null};
        const configuration: IConfiguration = toAVConfiguration(data, activeIntegration?.id, activeConfigId, selectedMetadata.id);
        if (configuration && activeConfigId !== undefined) {
            const iConfiguration: IConfiguration = toAVConfigurationPatch(data, selectedMetadata.id);
            saveConfiguration(activeIntegration?.id, activeConfigId, iConfiguration)
        }
        else if (activeIntegration?.id && configuration) {
            saveNewConfiguration(activeIntegration.id, configuration);
        } else {
            //TODO: Handle error
            return;
        }
    });

    return (
        <Box>
            <Typography id="integration-form-header" aria-label="integration-form-header" variant={"h6"} sx={{ mb: 2 }}>{t('header')}</Typography>
            <Typography><strong>{t('sourceApplicationId')}: </strong>{getSourceApplicationDisplayName(activeIntegration?.sourceApplicationId)}
                <strong> {t('sourceApplicationIntegrationId')}: </strong>{activeIntegration?.sourceApplicationIntegrationId} - {selectedMetadata.integrationDisplayName}
                <strong> {t('destination')}: </strong>{getDestinationDisplayName(activeIntegration?.destination)}
                <strong> ({t('integrationId')}: </strong>{activeIntegration?.id})
            </Typography>
            <Box width={'60%'} sx={{mt: 2}}>
                <InputField disabled={completed} input={INPUT_TYPE.TEXT_AREA} control={control} label="labels.comment" formValue="comment" error={errors.comment} helpText="comment"/>
            </Box>
        <DndProvider backend={HTML5Backend}>
            {!submitSuccess && (existingIntegration || newIntegration) &&
                <Box display="flex" position="relative" width={1} height={1} style={{backgroundColor: '#EBF4F5'}}>
                    <Box className={classes.metadataPanelContainer}>
                        <MetadataPanel style={classes} />
                    </Box>
                    <Box className={classes.panelContainer}>
                        <Box>
                            <Typography id="integration-form-header" aria-label="integration-form-header" variant={"h6"} sx={{ mb: 2 }}>{t('subHeader')}</Typography>
                            <form id="integration-form"  className={classes.form} onSubmit={onSubmit}>
                                {accordionList.map((accordion, index) => {
                                    return (
                                        <AccordionForm
                                            id={accordion.id}
                                            activeFormData={activeFormData}
                                            key={index}
                                            style={classes}
                                            summary={accordion.summary}
                                            accordionForm={accordion.accordionForm}
                                            defaultExpanded={accordion.defaultExpanded}
                                            hidden={accordion.hidden}
                                            integration={activeIntegration}
                                            watch={watch}
                                            control={control}
                                            setValue={setValue}
                                            errors={errors}
                                            validation={checked}
                                            disabled={completed}
                                            editConfig={editConfig}
                                            onSave={onSave}
                                            shieldingCheck={shieldingCheck}
                                            setShieldingCheck={setShieldingCheck}
                                            clearErrors={clearErrors}
                                            isToggled={isToggled}
                                            toggle={toggle}
                                        />
                                    )
                                })}
                                <div>
                                    <FormGroup sx={{ ml: 2, mb: 2 }} >
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disabled={completed}
                                                    id="form-complete"
                                                    checked={checked}
                                                    onChange={handleCheckChange}
                                                    inputProps={{ 'aria-label': 'completed-checkbox' }}/>}
                                            label={t('checkLabel') as string} />
                                        {checked && <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disabled={completed}
                                                    id="form-complete"
                                                    checked={activeChecked}
                                                    onChange={handleActiveCheckChange}
                                                    inputProps={{ 'aria-label': 'active-checkbox' }}/>}
                                            label={t('activeLabel') as string} />}
                                    </FormGroup>
                                </div>
                                <Box className={classes.buttonContainer}>
                                    <Button disabled={completed} id="integration-form-submit-btn" sx={{ ml: 2, mr: 2 }} onClick={checked ? onSubmit : onSave} variant="contained">{checked ? t('button.complete') : t('button.save')}</Button>
                                    <Button id="integration-form-cancel-btn" onClick={handleCancel} variant="contained">{t('button.cancel')}</Button>
                                </Box>
                            </form>
                        </Box>
                        {isToggled && <Box sx={{padding: 6}}>
                            <AccordionForm
                                id={classAcc.id}
                                activeFormData={activeFormData}
                                style={classes}
                                summary={classAcc.summary}
                                accordionForm={classAcc.accordionForm}
                                defaultExpanded={classAcc.defaultExpanded}
                                hidden={classAcc.hidden}
                                integration={activeIntegration}
                                watch={watch}
                                control={control}
                                setValue={setValue}
                                errors={errors}
                                validation={checked}
                                disabled={completed}
                                editConfig={editConfig}
                                onSave={onSave}
                                shieldingCheck={shieldingCheck}
                                setShieldingCheck={setShieldingCheck}
                                clearErrors={clearErrors}
                                isToggled={isToggled}
                                toggle={toggle}
                            />
                        </Box>}
                    </Box>
                    <Snackbar
                        id="integration-form-snackbar-saved"
                        open={saved}
                        autoHideDuration={4000}
                        onClose={handleClose}
                        message={t('messages.success')}
                        action={action}
                    />
                    <Snackbar
                        id="integration-form-snackbar-error"
                        open={saveError}
                        onClose={handleClose}
                        message={saveMessage}
                        action={action}
                    />
                </Box>
            }
            {submitSuccess &&
                <Box style={{ minHeight: 'fit-content' }}>
                    <Typography variant={"h5"} sx={{ mb: 2, mt: 2 }}>{t('successHeader')}</Typography>
                    <Button size="small" variant="contained" component={RouterLink} to="/integration/list">{t('button.integrationOverview')}</Button>
                    <Button size="small" variant="contained" sx={{ ml: 2 }} component={RouterLink} to="/">{t('button.dashboard')}</Button>
                </Box>}
        </DndProvider>
        </Box>
    );
}

export default withRouter(AVConfigForm);
