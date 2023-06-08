import React from 'react'
import { useUiContext } from '../context/UiContext';
import { AddCar } from '../screens/AddCar';
import { AddService } from '../screens/AddService';
import { Header } from '../components/Header';
import { CarShopAppContext } from '../context/CarShopContext';
import { AddCustomer } from '../screens/AddCustomer';
import { Order } from '../screens/Order.js';

export const AppRouter = () => {

    const { ui } = useUiContext();

    return (
        <div className="my-2">
            <Header />
            <main className="flex-shrink-0">
                <div className="container my-4">
                    <CarShopAppContext>
                        {
                            (ui.next === 1) ? <AddCustomer /> : (ui.next === 2) ? <AddCar /> : (ui.next === 3) ? <AddService /> : <Order />
                        }
                    </CarShopAppContext>
                </div>
            </main>
        </div>
    )
}
