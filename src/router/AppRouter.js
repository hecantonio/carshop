import React from 'react'
import { useUiContext } from '../context/UiContext';
import { AddCar } from '../components/AddCar';
import { AddService } from '../components/AddService';
import { Title } from '../components/Title';
import { CarShopAppContext } from '../context/CarShopContext';
import { AddCustomer } from '../components/AddCustomer';
import { Order } from '../components/Order.js';

export const AppRouter = () => {

    const { ui } = useUiContext();

    return (
        <CarShopAppContext>
            <Title />
            {
                (ui.next === 1) ? <AddCustomer /> : (ui.next === 2) ? <AddCar /> : (ui.next === 3) ? <AddService /> : <Order />
            }
        </CarShopAppContext>
    )
}
