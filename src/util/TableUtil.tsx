import {MOCK_EVENTS} from "../__tests__/mock/events";
import {IEvent} from "../features/instances/types/Event";
import {IIntegration} from "../features/integration/types/Integration";
import {MOCK_INTEGRATION} from "../__tests__/mock/integration";
import {ISelect} from "../features/configuration/types/Select";

export function getSourceApplicationDisplayName(id: number): string {
    if (id === 1) return "ACOS";
    if (id === 2) return "eGrunnerverv";
    if (id === 3) return "Riksantikvaren";
    else return "ukjent";
}

export function getDestinationDisplayName(id: string): string {
    if (id === "fylkesrad") return "Arkivsystem";
    else return "ukjent";
}

export function getStateDisplayName(id: string): string {
    if (id === "ACTIVE") return "Aktiv";
    if (id === "DEACTIVATED") return "Deaktivert";
    else return "ukjent";
}

export const isKeyOfIntegration = (key: string): key is keyof IIntegration => {
    return Object.keys(MOCK_INTEGRATION).includes(key);
};

export const integrationComparator = (a: IIntegration, b: IIntegration, orderBy: string) => {
    if (isKeyOfIntegration(orderBy)) {
        const aValue = a[orderBy];
        const bValue = b[orderBy];

        if (bValue === undefined || aValue === undefined) {
            return -1;
        }

        if (bValue < aValue) {
            return -1;
        }
        if (bValue > aValue) {
            return 1;
        }
        return 0;
    } else {
        return -1;
    }

};

export const isKeyOfEvent = (key: string): key is keyof IEvent => {
    return Object.keys(MOCK_EVENTS.content[0]).includes(key);
};

export const eventComparator = (a: IEvent, b: IEvent, orderBy: string) => {
    if (isKeyOfEvent(orderBy)) {
        const aValue = a[orderBy];
        const bValue = b[orderBy];

        if (bValue === undefined || aValue === undefined) {
            return -1;
        }

        if (bValue < aValue) {
            return -1;
        }
        if (bValue > aValue) {
            return 1;
        }
        return 0;
    } else {
        return -1;
    }
};

export interface Page<T> {
    content: T[];
    empty?: boolean;
    first?: boolean;
    last?: boolean;
    number?: number;
    numberOfElements?: number;
    pageable?: {
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        sort: { empty: boolean; sorted: boolean; unsorted: boolean };
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
        unpaged: boolean;
    };
    size?: number;
    sort?: { empty: boolean; sorted: boolean; unsorted: boolean };
    totalElements?: number;
    totalPages?: number;
}

export interface IError {
    message: string
}

export interface ITableSelect extends ISelect {
    disabled?: boolean
}