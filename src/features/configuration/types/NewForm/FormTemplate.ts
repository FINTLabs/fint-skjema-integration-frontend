import {ISelectable} from "../../components/FormPanel";

export interface IElementTemplate<T extends IValueTemplate | ISelectableValueTemplate | IObjectTemplate | ICollectionTemplate<IValueTemplate | IObjectTemplate>> {
    order: number,
    elementConfig: IElementConfig;
    template: T;
}

export interface IElementConfig {
    key: string;
    displayName: string;
    description: string;
    showDependency?: IDependency;
    enableDependency?: IDependency;
}

export enum ValueType {
    STRING = "STRING",
    DYNAMIC_STRING = "DYNAMIC_STRING",
    FILE = "FILE"
}

export interface IValueTemplate {
    type: ValueType;
    search?: IUrlBuilder;
}

export enum SelectableValueType {
    DROPDOWN = "DROPDOWN",
    SEARCH_SELECT = "SEARCH_SELECT",
    DYNAMIC_STRING_OR_SEARCH_SELECT = "DYNAMIC_STRING_OR_SEARCH_SELECT"
}

export interface ISelectableValueTemplate {
    type: SelectableValueType,
    selectables?: ISelectable[];
    selectablesSources?: IUrlBuilder[];
}

export interface IObjectTemplate {
    valueTemplates?: IElementTemplate<IValueTemplate>[];
    selectableValueTemplates?: IElementTemplate<ISelectableValueTemplate>[];
    objectTemplates?: IElementTemplate<IObjectTemplate>[];
    valueCollectionTemplates?: IElementTemplate<ICollectionTemplate<IValueTemplate>>[];
    objectCollectionTemplates?: IElementTemplate<ICollectionTemplate<IObjectTemplate>>[];
}

export interface ICollectionTemplate<T> {
    elementTemplate: T
}

export interface IUrlBuilder {
    urlTemplate: string;
    valueRefPerPathParamKey?: Record<string, string>
    valueRefPerRequestParamKey?: Record<string, string>;
}

export interface IDependency {
    hasAnyCombination: IValuePredicate[][];
}

export interface IValuePredicate {
    key: string;
    defined: boolean;
    value?: string;
    notValue?: string;
}
