import {ClassNameMap} from "@mui/styles";

export type ElementComponentProps = {
    classes: ClassNameMap;
    absoluteKey: string;
    displayName: string;
    description?: string;
}


export type ElementTemplateComponentProps<T> = {
    template: T
}
