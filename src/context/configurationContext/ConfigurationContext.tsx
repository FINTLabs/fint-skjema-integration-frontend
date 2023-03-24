import {ConfigurationContextState, contextDefaultValues} from "./types";
import {createContext, FC, useState} from "react";

export const ConfigurationContext = createContext<ConfigurationContextState>(
    contextDefaultValues
);

const ConfigurationProvider: FC = ({children}) => {
    const [completed, setCompleted] = useState<boolean>(contextDefaultValues.completed);

    function resetConfigurationContext() {
        setCompleted(contextDefaultValues.completed)
    }

    return (
        <ConfigurationContext.Provider
            value={{
                completed,
                setCompleted,
                resetConfigurationContext
            }}
        >
            {children}
        </ConfigurationContext.Provider>
    );
};

export default ConfigurationProvider;
