import axios from "axios";
import {IConfigurationPatch, newIConfiguration} from "../../features/integration/types/Configuration";

//TODO: test with updated API urls
const getConfigurations = (page: number, size: number, sortProperty: string, sortDirection: string, complete: boolean, integrationId: string,  excludeElements?: boolean) => {
    return axios.get<any>('api/intern/konfigurasjoner/', {
        params: {
            side: page,
            antall: size,
            sorteringFelt: sortProperty,
            sorteringRetning: sortDirection,
            ferdigstilt: complete,
            integrasjonId: integrationId,
            eksluderElementer: excludeElements
        }
    });
}
const getConfiguration = (configurationId: string, excludeElements?: boolean) => {
    return axios.get<any>(`api/intern/konfigurasjoner/${configurationId}`, { params: { eksluderElementer: excludeElements } });
}
const createConfiguration = (integrationId: string, data: newIConfiguration) => {
    return axios.post<any>(`api/intern/konfigurasjoner`, data);
}
const updateConfiguration = (configurationId: string, data: IConfigurationPatch) => {
    return axios.patch<any>(`api/intern/konfigurasjoner/${configurationId}`, data);
}
const deleteConfiguration = (configurationId: string) => {
    return axios.delete<any>(`api/intern/konfigurasjoner/${configurationId}`);
}

const ConfigurationRepository = {
    createConfiguration,
    updateConfiguration,
    getConfigurations,
    getConfiguration,
    deleteConfiguration
};

export default ConfigurationRepository;
