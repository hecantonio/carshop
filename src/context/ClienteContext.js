import { createContext, useContext, useReducer } from "react";
import { clienteReducer, initialState } from "./clienteReducer";

export const ClienteContext = createContext({});

export const ClienteAppContext = ({ children }) => {

    const [state, dispatch] = useReducer(clienteReducer, initialState);

    return (
        <ClienteContext.Provider value={{ state, dispatch }}>
            {children}
        </ClienteContext.Provider>
    )

}

export const useClienteContext = () => {
    return useContext(ClienteContext);
}