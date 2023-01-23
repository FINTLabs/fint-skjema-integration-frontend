import {configurationFieldToBoolean, configurationFieldToString} from "../MappingUtil";
import {IFormConfiguration} from "../../integration/types/Form/FormData";
import {IConfigurationElement, newIConfiguration} from "../../integration/types/Configuration";

export function newToFormData(data: newIConfiguration): IFormConfiguration {
    const caseFields: IConfigurationElement[] = data.elements?.filter(confField => confField.key === 'case');
    const recordFields: IConfigurationElement[] = data.elements?.filter(confField => confField.key === 'record');
    const documentFields: IConfigurationElement[] = data.elements?.filter(confField => confField.key === 'document');
    const applicantFields: IConfigurationElement[] = data.elements?.filter(confField => confField.key === 'applicant');
    return {
        comment: data.comment,
        completed: data.completed,
        caseData: {
            caseNumber: configurationFieldToString(caseFields, 'id'),
            title: configurationFieldToString(caseFields, 'tittel'),
            publicTitle: configurationFieldToString(caseFields, 'offentligTittel'),
            recordUnit: configurationFieldToString(caseFields, 'journalenhet'),
            caseCreationStrategy: configurationFieldToString(caseFields, 'type'),
            caseType: configurationFieldToString(caseFields, 'saksmappetype'),
            administrativeUnit: configurationFieldToString(caseFields, 'administrativenhet'),
            archiveUnit: configurationFieldToString(caseFields, 'arkivdel'),
            status: configurationFieldToString(caseFields, 'status'),
            accessCode: configurationFieldToString(caseFields, 'tilgangsrestriksjon'),
            paragraph: configurationFieldToString(caseFields, 'skjermingshjemmel'),
            caseWorker: configurationFieldToString(caseFields, 'saksansvarlig'),
            primaryClassification: configurationFieldToString(caseFields, 'primarordningsprinsipp'),
            secondaryClassification: configurationFieldToString(caseFields, 'sekundarordningsprinsipp'),
            tertiaryClassification: configurationFieldToString(caseFields, 'tertiarordningsprinsipp'),
            primaryClass: configurationFieldToString(caseFields, 'primarklasse'),
            secondaryClass: configurationFieldToString(caseFields, 'sekundarklasse'),
            tertiaryClass: configurationFieldToString(caseFields, 'tertiarklasse'),
            primaryTitle: configurationFieldToString(caseFields, 'primartittel'),
            secondaryTitle: configurationFieldToString(caseFields, 'sekundartittel'),
            tertiaryTitle: configurationFieldToString(caseFields, 'tertiartittel')
        },
        recordData: {
            title: configurationFieldToString(recordFields, 'tittel'),
            publicTitle: configurationFieldToString(recordFields, 'offentligTittel'),
            administrativeUnit: configurationFieldToString(recordFields, 'administrativenhet'),
            recordStatus: configurationFieldToString(recordFields, 'journalstatus'),
            recordType: configurationFieldToString(recordFields, 'journalposttype'),
            caseWorker: configurationFieldToString(recordFields, 'saksbehandler'),
            accessCode: configurationFieldToString(recordFields, 'tilgangsrestriksjon'),
            paragraph: configurationFieldToString(recordFields, 'skjermingshjemmel'),
        },
        mainDocumentData: {
            documentStatus: configurationFieldToString(documentFields, 'dokumentStatus'),
            documentType: configurationFieldToString(documentFields, 'dokumentType'),
            variant: configurationFieldToString(documentFields, 'dokumentObjekt.variantFormat'),
        },
        attachmentDocumentsData: {
            documentStatus: configurationFieldToString(documentFields, 'dokumentStatus'),
            documentType: configurationFieldToString(documentFields, 'dokumentType'),
            variant: configurationFieldToString(documentFields, 'dokumentObjekt.variantFormat'),
        },
        applicantData: {
            protected: configurationFieldToBoolean(applicantFields, 'protected'),
            organisationNumber: configurationFieldToString(applicantFields, 'organisasjonsnummer'),
            nationalIdentityNumber: configurationFieldToString(applicantFields, 'fødselsnummer'),
            name: configurationFieldToString(applicantFields, 'KorrespondansepartNavn'),
            address: configurationFieldToString(applicantFields, 'Adresse.adresselinje'),
            postalCode: configurationFieldToString(applicantFields, 'Adresse.postnummer'),
            city: configurationFieldToString(applicantFields, 'Adresse.poststed'),
            contactPerson: configurationFieldToString(applicantFields, 'kontaktperson'),
            phoneNumber: configurationFieldToString(applicantFields, 'Kontaktinformasjon.mobiltelefonnummer'),
            email: configurationFieldToString(applicantFields, 'Kontaktinformasjon.epostadresse'),
            accessCode: configurationFieldToString(applicantFields, 'tilgangsrestriksjon'),
            paragraph: configurationFieldToString(applicantFields, 'skjermingshjemmel'),
        },
    }
}
