import { createContext, useContext, useReducer } from "react";
import { vehiculoInitialState, vehiculoReducer } from "./vehiculoReducer";

export const VehiculoContext = createContext({});

export const VehiculoAppContext = ({ children }) => {

    const [vehiculo, dispatch] = useReducer(vehiculoReducer, vehiculoInitialState);

    return (
        <VehiculoContext.Provider value={{ vehiculo, dispatch }}>
            {children}
        </VehiculoContext.Provider>
    )

}

export const useVehiculoContext = () => {
    return useContext(VehiculoContext);
}