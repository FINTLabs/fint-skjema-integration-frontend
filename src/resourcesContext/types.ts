export interface IResourceItem {
    label: string;
    value: string;
}

export type ResourceContextState = {
    administrativeUnits: IResourceItem[];
    accessCodes: IResourceItem[];
    paragraphs: IResourceItem[];

    statuses: IResourceItem[];
    archiveSections: IResourceItem[];
    archiveResources: IResourceItem[];
    classificationSystems: IResourceItem[];
    classes: IResourceItem[];
    primaryClassification: IResourceItem;
    secondaryClassification: IResourceItem;
    tertiaryClassification: IResourceItem;
    primaryClass: IResourceItem[];
    secondaryClass: IResourceItem[];
    tertiaryClass: IResourceItem[];

    documentTypes: IResourceItem[];
    journalStatuses: IResourceItem[];

    documentStatuses: IResourceItem[];
    variants: IResourceItem[];

    getAllResources: () => void;

    getAdministrativeUnits: () => void;
    getAccessCodes: () => void;
    getParagraphs: () => void;

    getStatuses: () => void;
    getArchiveSections: () => void;
    getArchiveResources: () => void;
    getClassificationSystems: () => void;
    setPrimaryClassification: (primary: IResourceItem) => void;
    setSecondaryClassification: (secondary: IResourceItem) => void;
    setTertiaryClassification: (tertiary: IResourceItem) => void;

    getDocumentTypes: () => void;
    getJournalStatuses: () => void;

    getDocumentStatuses: () => void;
    getVariants: () => void;

};
