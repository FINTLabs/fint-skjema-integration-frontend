import {FormGroup} from '@mui/material';
import React, {useContext} from 'react';
import {IInputField} from "../../types/InputField";
import {INPUT_TYPE} from "../../types/InputType.enum";
import InputField from "./InputField";
import {FieldErrors} from "react-hook-form";
import {ResourcesContext} from "../../../../resourcesContext";

const RecordForm: React.FunctionComponent<any> = (props) => {
    const {administrativeUnits, accessCodes, paragraphs,  documentTypes, recordStatuses } = useContext(ResourcesContext);
    let errors: FieldErrors = props.errors;
    let required: boolean = props.validation;
    const recordFormFields: IInputField[] = [
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Tittel", formValue: "recordData.title", required: required, error:errors.recordData?.title, value: props.activeFormData?.recordData?.title},
        {input: INPUT_TYPE.DROPZONE_TEXT_FIELD, label: "Offentlig tittel", formValue: "recordData.publicTitle", required: required, error:errors.recordData?.publicTitle, value: props.activeFormData?.recordData?.publicTitle},
        {input: INPUT_TYPE.DROPDOWN, label: "Dokumenttype", value: props.watch("recordData.type"), formValue: "recordData.type", dropDownItems: documentTypes, required: required, error:errors.recordData?.type},
        {input: INPUT_TYPE.AUTOCOMPLETE, label: "Administrativ enhet", value: props.watch("recordData.administrativeUnit"), formValue: "recordData.administrativeUnit", dropDownItems: administrativeUnits, required: required, error:errors.recordData?.administrativeUnit},
        {input: INPUT_TYPE.DROPDOWN, label: "Status", value: props.watch("recordData.recordStatus"), formValue: "recordData.recordStatus", dropDownItems: recordStatuses, required: required, error:errors.recordData?.status},
        {input: INPUT_TYPE.DROPDOWN, label: "Tilgangskode", value: props.watch("recordData.accessCode"), formValue: "recordData.accessCode", dropDownItems: accessCodes, required: required, error:errors.recordData?.accessCode},
        {input: INPUT_TYPE.AUTOCOMPLETE, label: "Hjemmel", value: props.watch("recordData.paragraph"), formValue: "recordData.paragraph", dropDownItems: paragraphs, required: required, error:errors.recordData?.paragraph}
   ]
    return (
        <FormGroup className={props.style.formControl}>
            {recordFormFields.map((field, index) => {
                return (
                    <InputField key={index}
                                required={field.required}
                                error={field.error}
                                input={field.input}
                                label={field.label}
                                value={field.value}
                                formValue={field.formValue}
                                dropdownItems={field.dropDownItems}
                                {...props}
                    />
                )}
            )}
        </FormGroup>
    );
}

export default RecordForm;