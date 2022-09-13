import React, {createContext, FC, useState} from "react";
import {contextDefaultValues, ISourceApplicationItem, SourceApplicationContextState} from "./types";
import IntegrationRepository from "../../features/integration/repository/IntegrationRepository";
import {IIntegrationConfiguration} from "../../features/integration/types/IntegrationConfiguration";
import SourceApplicationRepository from "../../features/integration/repository/SourceApplicationRepository";
import {IIntegrationMetadata} from "../../features/integration/types/IntegrationMetadata";
import {ISelect} from "../../features/integration/types/InputField";

export const SourceApplicationContext = createContext<SourceApplicationContextState>(
    contextDefaultValues
);

const SourceApplicationProvider: FC = ({children}) => {
    const [allForms, setAllForms] = useState<ISourceApplicationItem>(contextDefaultValues.availableForms);
    const [availableForms, setAvailableForms] = useState<ISourceApplicationItem>(contextDefaultValues.availableForms);


    const getAvailableForms = () => {
        IntegrationRepository.get()
            .then(response => {
                let ids: string[] = response.data.content.map((config: IIntegrationConfiguration) => config.sourceApplicationIntegrationId)
                console.log(ids)
                let selectableForms = allForms.sourceApplicationForms.filter(form => !ids.includes(form.value));
                console.log(selectableForms)
                setAvailableForms({sourceApplication: 'acos', sourceApplicationForms: selectableForms})
            })
            .catch((err) => {
                console.error(err);
            })
    }

    const getMetadata = () => {
        //TODO:
    }

    //TODO: get all forms from sourceApplication when available
    const getAllForms = () => {
        SourceApplicationRepository.getMetadata("1")
            .then(response => {
                let data: Object = response.data.integrationMetadataPerSourceApplicationIntegrationId;
                let form2: ISelect[] = [];
                let map: Map<string, IIntegrationMetadata> = new Map<string, IIntegrationMetadata>(
                    Object.keys(data)
                        .map(key => [key, data[key as keyof typeof data]])
                        .map(entry => entry as [string, IIntegrationMetadata])
                );
                map.forEach((value) => {
                    form2.push({value: value.sourceApplicationIntegrationId, label: value.sourceApplicationIntegrationId + ' - ' + value.integrationDisplayName})
                })
                console.log(form2)
                //TODO: data.get/map/forEach, new ISelect[] -> {data.integrationDisplayName = label, data.sourceApplicationIntegrationId = value} replace "forms"
                setAllForms({sourceApplication: 'acos', sourceApplicationForms: form2})
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <SourceApplicationContext.Provider
            value={{
                allForms,
                availableForms,
                getAvailableForms,
                getMetadata,
                getAllForms
            }}
        >
            {children}
        </SourceApplicationContext.Provider>
    );
};

export default SourceApplicationProvider;
