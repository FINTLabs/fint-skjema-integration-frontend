import IApplicantData from "./ApplicantData";
import IDocumentData from "./DocumentData";
import IRecordData from "./RecordData";
import ICaseData from "./CaseData";
import {ISearchField} from "../CaseSearchField";

export default interface IFormData {
    name?: string;
    description?: string;
    version?: string;
    sourceApplication?: string;
    sourceApplicationIntegrationId?: string;
    destination?: string;
    published?: boolean;
    existingCaseSearchFields?: ISearchField;

    caseData?: ICaseData;
    recordData?: IRecordData;
    documentData?: IDocumentData;
    applicantData?: IApplicantData;
}
