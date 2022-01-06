import * as React from "react";
import {useForm} from "react-hook-form";
import {Link as RouterLink, RouteComponentProps, useLocation, withRouter} from "react-router-dom";
import {Box, Button, Theme, Typography} from "@mui/material";
import {createStyles, makeStyles} from "@mui/styles";
import IFormData from "./types/Form/FormData";
import IntegrationRepository from "./repository/IntegrationRepository";
import {defaultValues} from "./util/DefaultValues";
import {toIntegrationConfiguration} from "./util/ToIntegrationConfiguration";
import AccordionForm from "./components/AccordionForm";
import {ACCORDION_FORM, IAccordion} from "./types/Accordion";
import TagList from "./components/TagList";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {IIntegrationConfiguration} from "./types/IntegrationConfiguration";
import {CreationStretegy} from "./types/CreationStretegy";
import {useState} from "react";
import {toFormData} from "./util/ToFormData";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            width: theme.spacing(120)
        },
        row: {
            display: 'flex'
        },
        column: {
            flex: '50%',
            paddingLeft: theme.spacing(2)
        },
        taglistContainer: {
            marginTop: theme.spacing(6),
            marginLeft: theme.spacing(8),
            padding: theme.spacing(2),
            border: 'solid 2px',
            borderColor: 'rgba(0, 0, 0, 0.37)',
            borderRadius: '4px',
            boxShadow: '0px 2px 2px -1px',
            height: theme.spacing(30),
            position: 'sticky',
            top: theme.spacing(16)
        },
        formControl: {
            width: theme.spacing(80)
        },
        accordion: {
            marginBottom: theme.spacing(2)
        },
        accordionSummary: {
            backgroundColor: theme.palette.primary.light,
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
        },
        tagList: {
            opacity: 0.99,
            width: theme.spacing(40),
            height: 'fit-content'
        }
    })
);

const IntegrationConfigurationForm: React.FunctionComponent<RouteComponentProps<any>> = () => {
    const classes = useStyles();
    const location = useLocation();
    const [submitSuccess, setSubmitSuccess] = useState(false)
    let activeConfiguration = location.state ? location.state as IIntegrationConfiguration : undefined;

    const {handleSubmit, watch, setValue, control, reset, formState} = useForm<IFormData>({
        defaultValues: location.state ? toFormData(location.state as IIntegrationConfiguration) : defaultValues,
        reValidateMode: 'onChange'
    });
    const { errors } = formState;

    const accordionList: IAccordion[] = [
        {summary: "Integrasjonslogikk", accordionForm: ACCORDION_FORM.CASE_INFORMATION, defaultExpanded: true},
        {summary: "Sakspost", accordionForm: ACCORDION_FORM.CASE_FORM, defaultExpanded: false, hidden: watch("caseData.caseCreationStrategy") === CreationStretegy.COLLECTION},
        {summary: "Journalpost", accordionForm: ACCORDION_FORM.RECORD_FORM, defaultExpanded: false},
        {summary: "Dokument- og objektbeskrivelse", accordionForm: ACCORDION_FORM.DOCUMENT_FORM, defaultExpanded: false},
        {summary: "Avsender", accordionForm: ACCORDION_FORM.APPLICANT_FORM, defaultExpanded: false}
    ]

    const createNewConfiguration = (data: IIntegrationConfiguration) => {
        IntegrationRepository.create(data)
            .then(response => {
                console.log('created new configuraton', data, response);
                setSubmitSuccess(response.status === 201);
            })
            .catch((e: Error) => {
                console.log('error creating new', e);
            });
    }

    const updateConfiguration = (id: string, data: IIntegrationConfiguration) => {
        IntegrationRepository.update(id, data)
            .then(response => {
                console.log('updated configuraton: ', id,  data, response);
                setSubmitSuccess(response.status === 200);
            })
            .catch((e: Error) => {
                console.log('error updating configuration', e);
            });
    }

    const onSubmit = handleSubmit((data: IFormData) => {
        console.log('on submit', data, 'active conf: ', activeConfiguration)
        const integrationConfiguration: IIntegrationConfiguration = toIntegrationConfiguration(data);
        if (integrationConfiguration && activeConfiguration?.id !== undefined) {
            const integrationConfiguration: IIntegrationConfiguration = toIntegrationConfiguration(data, activeConfiguration.id);
            updateConfiguration(activeConfiguration.id, integrationConfiguration)
        }
        else if(integrationConfiguration) {
            const integrationConfiguration: IIntegrationConfiguration = toIntegrationConfiguration(data);
            createNewConfiguration(integrationConfiguration);
            reset({ ...defaultValues })
        } else {
            //TODO: Handle error
            return;
        }
    });

    return (
        <DndProvider backend={HTML5Backend}>
            {!submitSuccess &&
            <Box display="flex" position="relative" width={1} height={1}>
                <Box>
                    <Typography variant={"h5"} sx={{mb: 2}}>Integrasjon til arkiv</Typography>
                    <form className={classes.form} onSubmit={onSubmit}>
                        {accordionList.map((accordion, index) => {
                            return (
                                <AccordionForm
                                    key={index}
                                    style={classes}
                                    summary={accordion.summary}
                                    accordionForm={accordion.accordionForm}
                                    defaultExpanded={accordion.defaultExpanded}
                                    hidden={accordion.hidden}
                                    watch={watch}
                                    control={control}
                                    setValue={setValue}
                                    errors={errors}
                                    validation={false}
                                />
                            )})}
                        <div>
                            <Button type="submit" variant="contained">Send inn</Button>
                        </div>
                    </form>
                </Box>
                <Box className={classes.taglistContainer}>
                    <TagList style={classes}/>
                </Box>
            </Box>
            }
            {submitSuccess &&
            <Box style={{minHeight: 'fit-content'}}>
                <Typography variant={"h5"} sx={{mb: 2}}>Integrasjon til arkiv - Ferdig</Typography>
                <Button size="small" variant="contained" component={RouterLink} to="/overview">Se integrasjoner</Button>
                <Button size="small" variant="contained" sx={{ml: 2}} onClick={() => window.location.reload()}>Ny integrasjon</Button>
            </Box>}
        </DndProvider>
    );
}

export default withRouter(IntegrationConfigurationForm);
