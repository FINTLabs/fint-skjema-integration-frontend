// noinspection SpellCheckingInspection

import {ISelect} from "../types/InputField";
import {CreationStrategy} from "../types/CreationStrategy";
import IFormData from "../types/Form/FormData";
import {ApplicantType} from "../types/ApplicantType";

export const defaultValues: IFormData = {
    description: '',
    version: '',
    sourceApplicationId: '',
    sourceApplicationIntegrationId: '',
    destination: '',
    published: false,
    caseData: {
        caseCreationStrategy: CreationStrategy.NEW,
        caseNumber: '',
        title: '',
        publicTitle: '',
        caseType: '',
        administrativeUnit:'',
        archiveUnit:'',
        recordUnit: '',
        status: '',
        accessCode: '',
        paragraph: '',
        caseWorker: '',
        primaryClassification: '',
        secondaryClassification: '',
        tertiaryClassification: '',
        primaryClass: '',
        primaryClassSsNbr: '',
        primaryClassOrg: '',
        secondaryClass: '',
        tertiaryClass: '',
        primaryTitle: '',
        secondaryTitle: '',
        tertiaryTitle: ''
    },
    recordData: {
        title: '',
        publicTitle: '',
        documentType: '',
        administrativeUnit: '',
        recordStatus: '',
        recordType: '',
        caseWorker: '',
        accessCode: '',
        paragraph: ''
    },
    documentData: {
        title: '',
        documentStatus: '',
        documentCategory: '',
        accessCode: '',
        paragraph: '',
        variant: ''
    },
    applicantData: {
        protected: false,
        type: ApplicantType.PERSON,
        organisationNumber: '',
        nationalIdentityNumber: '',
        name: '',
        address: '',
        postalCode: '',
        city: '',
        contactPerson: '',
        phoneNumber: '',
        email: '',
        accessCode: '',
        paragraph: ''
    }
}

export const dropdownPlaceholder: ISelect[] = [
    {label: 'Alternativ 1', value: 'alt1'},
    {label: 'Alternativ 2', value: 'alt2'},
    {label: 'Alternativ 3', value: 'alt3'},
    {label: 'Alternativ 4', value: 'alt4'},
    {label: 'Alternativ 5', value: 'alt5'},
    {label: 'Alternativ 6', value: 'alt6'},
    {label: 'Alternativ 7', value: 'alt7'},
    {label: 'Alternativ 8', value: 'alt8'},
    {label: 'Alternativ 9', value: 'alt9'},
    {label: 'Alternativ 10', value: 'alt10'}
]

export const creationStrategies: ISelect[] = [
    {label: 'selects.creationStrategies.new', value: 'NEW',  description: "selects.creationStrategies.newDesc"},
    {label: 'selects.creationStrategies.existing', value: 'EXISTING',  description: "selects.creationStrategies.existingDesc"},
    {label: 'selects.creationStrategies.collection', value: 'COLLECTION', description: "selects.creationStrategies.collectionDesc"}
];

export const applicantOptions: ISelect[] = [
    {label: 'selects.applicantOptions.individual',value: 'PERSON'},
    {label: 'selects.applicantOptions.organisation', value: 'ORGANISATION'}
];

export const forms: ISelect[] = [
    { label: "VIK014 - Søknad om reservasjon av skoleplass", value: "VIK014" },
    { label: "VIK017 - Bestilling av lærekontrakt/opplæringskontrakt", value: "VIK017" },
    { label: "VIK022 - Endring av kontraktstype eller planlagt måloppnåelse", value: "VIK022" },
    { label: "VIK027 - Melding om flytting til barnevernsinstitusjon i Viken", value: "VIK027" },
    { label: "VIK036 - Søknad til kombinasjonsprogram", value: "VIK036" },
    { label: "VIK050 - Vedtak om spesialundervisning for elever i friskoler", value: "VIK050" },
    { label: "VIK066 - Praksiskalkulator for praksiskandidater", value: "VIK066" },
    { label: "VIK069 - Klage på ikke bestått fag-/svenne- eller kompetanseprøve", value: "VIK069" },
    { label: "VIK083 - Søknad om tilskudd til publikumsutvikling", value: "VIK083" },
    { label: "VIK088 - Avtale om bruk av PC/nettbrett for prøvenemndsmedlemmer i Viken", value: "VIK088" },
    { label: "VIK097 - Lærebedriftens sluttrapport for bruk av særskilt tilskudd for lærlinger og lærekandidater", value: "VIK097" },
    { label: "VIK109 - Legeerklæring til søknad om TT-kort", value: "VIK109" },
    { label: "VIK129 - Fag- og yrkesopplæringspriser i Viken fylkeskommune", value: "VIK129" },
    { label: "VIK132 - Samtykke - fotografering/video/lyd", value: "VIK132" },
    { label: "VIK146 - Akseptskjema for tilskudd", value: "VIK146" },
    { label: "VIK148 - Oppfølging av leverandører som følge av Schrems II-dommen", value: "VIK148" },
    { label: "VIK183 - Søknadsskjema - Fagskolen i Viken, studiested Geilo", value: "VIK183" },
    { label: "VIK190 - Søknad til fagskolen i Viken - Vedlikeholdsteknikk 4.0", value: "VIK190" },
    { label: "VIK223 - Bærekraftsjekken for Viken", value: "VIK223" },
    { label: "VIK238 - Søknadsskjema for lån eller leie av fylkeskommunale skolelokaler i Viken", value: "VIK238" },
    { label: "VIK264 - Søknad - Tilskudd til pilotprosjekt", value: "VIK264" },
];

export const sourceApplications: ISelect[] = [
    { label: "ACOS", value: "acos" }
];

export const destinations: ISelect[] = [
    { label: "Fylkesråd", value: "fylkesrad" }
];

export const fieldHelp = {
    description: 'besrkrivelse',
    version: '',
    sourceApplicationId: 'Skjemaleverandør, f.eks ACOS',
    sourceApplicationIntegrationId: 'Skjema, f.eks VIK103',
    destination: 'fylkesting, fylkesråd, kollektiv ++',
    caseData: {
        caseCreationStrategy: 'Avleveringslogikk ...',
        caseNumber: ' må være på formatet saksår/sekvensnr, f.eks 2021/12345',
        title: 'Tittel kan være en konkret tekststreng, eller en kombinasjon\n' +
            ' av flere metadatafelt. (Settes opp i henhold til skriveregler for type sak.\n' +
            '  (Se Noark))',
        publicTitle: 'Se Noark (Del av tittel som skal skjermes)',
        status: '-',
        caseType: 'Eksempel: Kompetanse, personal, rekrutering etc.',
        administrativeUnit:'Avdeling eller enhet som skal behandle saken.',
        archiveUnit:'Eksempel: kompetanse, sakarkiv, personal',
        recordUnit: 'Navnet på journalførende enhet.\n' +
            'Eksempel: Viken fylkesråd',
        accessCode: 'Dersom noe skjermes må man også sette tilgangskode. \n' +
            'Eksempel: Unntatt offentlighet, personal, varslingssak, ugradert. ',
        paragraph: 'Dersom det settes tilgangskode må det også settes hjemmel. \n' +
            'Det må være en lovmessig hjemmel for skjerming eller begrenset tilgang. \n' +
            '\n' +
            'Eksempel:\n' +
            '\n' +
            'Offl. §13 ',
        caseWorker: 'Konkret saksbehandler eller ufordelt.',
        classification: 'Det må kunne settes flere klasseringer på en sak,\n' +
            ' slik at sjemaet kan lete fram riktig sak.\n' +
            'Eksempel: Primærkode=K-koder, \n' +
            'Sekundærkode=organisasjonsnummer eller personnummer',
        class: 'Vi må kunne fylle ut verdi og betegnelse.\n' +
            'Eksempel: K-kode: Verdi 003, Betegnelse: Målbruk.\n' +
            'Person: verdi: fødselsnummer, betegnelse = personnavn.',
    },
    recordData: {
        title: 'Tittel kan være en konkret tekststreng, eller en kombinasjon\n' +
            ' av flere metadatafelt. (Settes opp i henhold til skriveregler for type sak.\n' +
            '  (Se Noark))',
        publicTitle: 'Se Noark (Del av tittel som skal skjermes)',
        type: 'I, U, N, X',
        administrativeUnit: 'Enheten/avdelingen. Nedtrekksmeny fra Elements',
        status: 'R,F,E,J',
        caseWorker: 'En sak kan ha en ansvarlig saksbehandler men det kan være ulike saksbehandlere på ulike journalposter.',
        accessCode: 'Eksempel: Unntatt offentlighet, persona,l varslingssak, ugradert. ',
        paragraph: 'Eksempel: Offl. §13 ',
    },
    documentData: {
        title: 'Tittel kan være en konkret tekststreng, eller en kombinasjon\n' +
            ' av flere metadatafelt. (Settes opp i henhold til skriveregler for type sak.\n' +
            '  (Se Noark))',
        documentStatus: 'Eksempel: B, F',
        accessCode: 'Eksempel: Unntatt offentlighet, persona,l varslingssak, ugradert. ',
        paragraph: 'Eksempel: Offl. §13',
        variant: 'Arkivformat/ produksjonsformat / offentlig variant'
    },
    applicantData: {
        type: 'Person eller organisasjon/bedrift',
        organisationNumber: 'Orgnr for avsenderbedrift',
        nationalIdentityNumber: 'Fødselsnummer for avsender',
        name: 'Navn på bedrift/org, eller person',
        address: 'Postadresse',
        postalCode: 'Postkode',
        city: 'Poststed',
        contactPerson: 'Navn på søker er ikke alltid lik med kontaktperson',
        phoneNumber: 'Telefonnummer',
        email: 'epostadresse',
        accessCode: 'velge om avsender skal være skjermet',
        paragraph: 'Denne skal fjernes',
    }
}
