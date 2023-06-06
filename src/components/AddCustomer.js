import React from 'react'
import { useForm } from '../hooks/useForm'
import { useCarShopContext } from '../context/CarShopContext';
import { useUiContext } from '../context/UiContext';
import Swal from 'sweetalert2';

export const AddCustomer = () => {

    const { carShop, dispatch } = useCarShopContext();
    const { dispatch: dispatchUi } = useUiContext();

    const [formValues, handleInputChange, reset] = useForm(carShop.customer);

    const { tipoIdentificacion, identificacion, nombre, email, telefono } = formValues;

    const handleBuscar = (event) => {
        dispatch({
            type: 'search',
            payload: event.target.value,
        })
    }

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
        <div className="card">
            <div className="card-header fs-4 fw-bold">
                Datos del cliente
            </div>
            <div className="card-body">
                <div className="mb-3 row">
                    <label htmlFor="tipoIdentificacion" className="col-sm-2 col-form-label fw-semibold">Tipo identificación: </label>
                    <div className="col-sm-10">
                        <select className="form-select" aria-label="Default select example" id="tipoIdentificacion" name="tipoIdentificacion" onChange={handleInputChange} value={tipoIdentificacion}>
                            <option value="">- Seleccionar -</option>
                            <option value="C">Cédula</option>
                            <option value="R">RUC</option>
                            <option value="P">Pasaporte</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="identificacion" className="col-sm-2 col-form-label fw-semibold">Identificación:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="identificacion"
                            name="identificacion"
                            value={identificacion}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="nombre" className="col-sm-2 col-form-label fw-semibold">Nombres completos:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-2 col-form-label fw-semibold">Email:</label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="telefono" className="col-sm-2 col-form-label fw-semibold">Teléfono:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="telefono"
                            name="telefono"
                            value={telefono}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                {
                    JSON.stringify(carShop)
                }
            </div>
            <div className="card-footer bg-transparent text-end">
                <button
                    className="btn btn-primary"
                    onClick={handleGuardar}
                >
                    Continuar
                </button>
            </div>
        </div>
    )
}

