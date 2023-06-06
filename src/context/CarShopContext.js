import { createContext, useContext, useReducer } from "react";
import { carShopReducer, initialState } from "./carShopReducer";

export const CarShopContext = createContext({});

export const CarShopAppContext = ({ children }) => {

    const [carShop, dispatch] = useReducer(carShopReducer, initialState);

    return (
        <CarShopContext.Provider value={{ carShop, dispatch }}>
            {children}
        </CarShopContext.Provider>
    )

}

export const useCarShopContext = () => {
    return useContext(CarShopContext);
}