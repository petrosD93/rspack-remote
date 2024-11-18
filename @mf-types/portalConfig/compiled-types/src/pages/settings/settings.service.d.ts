export declare class SettingsService {
    static instance: any;
    static getInstance(): any;
    getEndpoints(): Promise<any>;
    getConfigApiValues(configUrl: any, page: number | undefined, size: number | undefined, sortBy: any, field: any, searchValue: any): Promise<any>;
    getEndpointById(endpoint: any, id: any): Promise<any>;
    createEndpoint(endpoint: any, data: any): Promise<any>;
    updateEndpointById(endpoint: any, id: any, data: any): Promise<any>;
    deleteEndpointById(endpoint: any, id: any): Promise<any>;
}
