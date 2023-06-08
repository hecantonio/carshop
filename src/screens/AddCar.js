import React from 'react'
import { useForm } from '../hooks/useForm'
import { useUiContext } from '../context/UiContext';
import { useCarShopContext } from '../context/CarShopContext';
import { Card } from '../components/Card';
import { Input } from '../components/Input';


export const AddCar = () => {

    const { carShop, dispatch } = useCarShopContext();
    const { dispatch: dispatchUi } = useUiContext();

    const { customer: { nombre } } = carShop;

    const [formValues, handleInputChange, reset] = useForm(carShop.car);

    const { placa, marca, modelo, nivelTanque, observaciones } = formValues;

    const handleGuardar = () => {
        dispatch({
            type: 'addVehicle',
            payload: formValues,
        });
        reset();
        dispatchUi({
            type: 'setNext',
            payload: 3,
        })
    }

    const handleRegresar = () => {
        dispatchUi({
            type: 'setNext',
            payload: 1,
        })
    }

    return (
        <Card
            title="Datos del vehiculo"
            onSubmit={handleGuardar}
            onRegresar={handleRegresar}
        >
            <Input
                title="Nombre propietario:"
                name="nombreTitular"
                value={nombre}
                disabled={true}
                onInputChange={() => { }}
            />
            <Input
                title="Placa:"
                name="placa"
                value={placa}
                onInputChange={handleInputChange}
            />
            <Input
                title="Marca:"
                name="marca"
                value={marca}
                onInputChange={handleInputChange}
            />
            <Input
                title="Modelo:"
                name="modelo"
                value={modelo}
                onInputChange={handleInputChange}
            />
            <Input
                title="Nivel gasolina:"
                name="nivelTanque"
                value={nivelTanque}
                onInputChange={handleInputChange}
            />
            <Input
                title="Observaciones:"
                name="observaciones"
                value={observaciones}
                onInputChange={handleInputChange}
            />
        </Card>
    )
}
