import React from 'react'
import { useUiContext } from '../context/UiContext';
import { AddCar } from '../components/AddCar';
import { AddService } from '../components/AddService';
import { Header } from '../components/Header';
import { CarShopAppContext } from '../context/CarShopContext';
import { AddCustomer } from '../components/AddCustomer';
import { Order } from '../components/Order.js';

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
