import React from 'react'
import { useForm } from '../hooks/useForm'
import { useCarShopContext } from '../context/CarShopContext';
import { useUiContext } from '../context/UiContext';
import Swal from 'sweetalert2';
import { Card } from '../components/Card';
import { Input } from '../components/Input';

export const AddCustomer = () => {

    const { carShop, dispatch } = useCarShopContext();
    const { dispatch: dispatchUi } = useUiContext();

    const [formValues, handleInputChange, reset] = useForm(carShop.customer);

    const { tipoIdentificacion, identificacion, nombre, email, telefono } = formValues;

    const handleGuardar = () => {
        if (tipoIdentificacion !== '' && identificacion !== '' && nombre !== '' && email !== '' && telefono !== '') {
            dispatch({
                type: 'addCustomer',
                payload: formValues,
            });
            reset();
            dispatchUi({
                type: 'setNext',
                payload: 2,
            })
        } else {
            Swal.fire('Todos los campos son obligatorios');
        }
    }

    return (
        <Card
            title="Datos del cliente"
            onSubmit={handleGuardar}
        >
            <div className="mb-3 row">
                <label htmlFor="tipoIdentificacion" className="col-sm-2 col-form-label fw-semibold">Tipo identificación: </label>
                <div className="col-sm-10">
                    <select className="form-select" aria-label="Seleccionar" id="tipoIdentificacion" name="tipoIdentificacion" onChange={handleInputChange} value={tipoIdentificacion}>
                        <option value="">- Seleccionar -</option>
                        <option value="C">Cédula</option>
                        <option value="R">RUC</option>
                        <option value="P">Pasaporte</option>
                    </select>
                </div>
            </div>
            <Input
                title="identificación:"
                name="identificacion"
                value={identificacion}
                onInputChange={handleInputChange}
            />
            <Input
                title="Nombres completos:"
                name="nombre"
                value={nombre}
                onInputChange={handleInputChange}
            />
            <Input
                title="Email:"
                name="email"
                value={email}
                onInputChange={handleInputChange}
            />
            <Input
                title="Teléfono:"
                name="telefono"
                value={telefono}
                onInputChange={handleInputChange}
            />
        </Card>
    )
}

