import {IField} from "./Field";

export interface ICaseConfiguration {
    caseCreationStrategy?: string;
    caseNumber?: string;
    fields?: IField[];
}
export interface IRecordConfiguration {
    fields?: IField[];
}
export interface IDocumentConfiguration {
    fields?: IField[];
}
export interface IApplicantConfiguration {
    applicantType?: string;
    organisationNumber?: boolean;
    protected?: boolean;
    fields?: IField[];
}

export interface IConfiguration {
    configurationId?: string;
    integrationId?: string;
    comment?: string;
    version?: number;
    metadataId?: number;
    completed?: boolean;

    caseConfiguration?:ICaseConfiguration;
    recordConfiguration?: IRecordConfiguration;
    documentConfiguration?: IDocumentConfiguration;
    applicantConfiguration?: IApplicantConfiguration;
}
