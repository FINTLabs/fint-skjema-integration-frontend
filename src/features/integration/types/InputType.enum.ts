export enum INPUT_TYPE {
    TEXT_FIELD,
    DROPDOWN,
    AUTOCOMPLETE,
    RADIO,
    DROPZONE_TEXT_FIELD,
    TEXT_AREA
}

export function toInputType(input: string): INPUT_TYPE {
    if(input === "TEXT_FIELD") return INPUT_TYPE.TEXT_FIELD
    if(input === "DROPDOWN") return INPUT_TYPE.DROPDOWN
    if(input === "AUTOCOMPLETE") return INPUT_TYPE.AUTOCOMPLETE
    if(input === "RADIO") return INPUT_TYPE.RADIO
    if(input === "TEXT_AREA") return INPUT_TYPE.TEXT_AREA
    else return INPUT_TYPE.TEXT_FIELD
}