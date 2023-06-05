import { createContext, useContext, useReducer } from "react";
import { uiInitialState, uiReducer } from "./uiReducer";

export const UiContext = createContext({});

export const UiAppContext = ({ children }) => {

    const [ui, dispatch] = useReducer(uiReducer, uiInitialState);

    return (
        <UiContext.Provider value={{ ui, dispatch }}>
            {children}
        </UiContext.Provider>
    )

}

export const useUiContext = () => {
    return useContext(UiContext);
}