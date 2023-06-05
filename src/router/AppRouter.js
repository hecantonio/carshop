import React from 'react'
import { useUiContext } from '../context/UiContext';
import { ClienteAppContext } from '../context/ClienteContext';
import { VehiculoAppContext } from '../context/VehiculoContext';
import { AddVehiculo } from '../components/AddVehiculo';
import { AddCliente } from '../components/AddCliente';
import { AddService } from '../components/AddService';
import { Title } from '../components/Title';

export const AppRouter = () => {

    const { ui } = useUiContext();

    return (
        <ClienteAppContext>
            <VehiculoAppContext>
                <Title />
                {
                    (ui.next === 'Vehiculo') ? <AddVehiculo /> : (ui.next === 'Servicios') ? <AddService /> : <AddCliente />
                }
            </VehiculoAppContext>
        </ClienteAppContext>
    )
}
