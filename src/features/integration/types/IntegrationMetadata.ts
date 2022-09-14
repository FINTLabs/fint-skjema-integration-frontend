export interface IInstanceElementMetadata {
    id?: number;
    key: string;
    displayName: string;
    children: IInstanceElementMetadata[];
}

export interface IIntegrationMetadata {
    id?: any;
    sourceApplicationId: string;
    sourceApplicationIntegrationId: string;
    sourceApplicationIntegrationUri: string;
    integrationDisplayName: string;
    instanceElementMetadata: IInstanceElementMetadata[];
    version: number;
}
