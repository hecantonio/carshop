import React from 'react'
import { useForm } from '../hooks/useForm'
import { useClienteContext } from '../context/ClienteContext';

let id = 1;

export const AddVehiculo = () => {

    const { state, dispatch } = useClienteContext();

    const [formValues, handleInputChange, reset] = useForm({
        tipoIdentificacion: '',
        identificacion: '',
        nombre: '',
        email: '',
        telefono: '',
    });

    const { nombre, email, telefono, tipoIdentificacion, identificacion } = formValues;

    const handleGuardar = () => {
        dispatch({
            type: 'add',
            payload: {
                id: id++,
                ...formValues
            },
        });
        reset();
    }

    return (
        <div class="card">
            <div class="card-header fw-bold">
                Añadir cliente
            </div>
            <div class="card-body">
                <div className="mb-3 row">
                    <label for="tipoIdentificacion" className="col-sm-2 col-form-label fw-semibold">Tipo identificación: </label>
                    <div className="col-sm-10">
                        <select className="form-select" aria-label="Default select example" id="tipoIdentificacion" name="tipoIdentificacion" onChange={handleInputChange} value={tipoIdentificacion}>
                            <option selected>- Seleccionar -</option>
                            <option value="C">Cédula</option>
                            <option value="R">RUC</option>
                            <option value="P">Pasaporte</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="identificacion" className="col-sm-2 col-form-label fw-semibold">Identificación:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="identificacion"
                            name="identificacion"
                            value={identificacion}
                            onChange={handleInputChange}
                        /> </div>
                </div>
                <div className="mb-3 row">
                    <label for="nombre" className="col-sm-2 col-form-label fw-semibold">Nombres completos:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        /> </div>
                </div>
                <div className="mb-3 row">
                    <label for="email" className="col-sm-2 col-form-label fw-semibold">Email:</label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        /> </div>
                </div>
                <div className="mb-3 row">
                    <label for="telefono" className="col-sm-2 col-form-label fw-semibold">Teléfono:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="telefono"
                            name="telefono"
                            value={telefono}
                            onChange={handleInputChange}
                        /> </div>
                </div>
                {
                    JSON.stringify(state, null, 10)
                }
            </div>
            <div class="card-footer bg-transparent text-end">
                <button
                    className="btn btn-primary"
                    onClick={handleGuardar}
                >
                    Guardar
                </button>
            </div>
        </div>
    )
}
