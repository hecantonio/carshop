import React from 'react'
import { useForm } from '../hooks/useForm'
import { useClienteContext } from '../context/ClienteContext';

export const AddCliente = () => {

    const { state, dispatch } = useClienteContext();

    const [formValues, handleInputChange, reset] = useForm({
        nombre: '',
        email: '',
        telefono: '',
        tipoIdentificacion: '',
        identificacion: '',
    });

    const { nombre, email, telefono, tipoIdentificacion, identificacion } = formValues;

    const handleGuardar = () => {

    }

    return (
        <div>
            <h3>Agregar Cliente</h3>
            <div>
                <input
                    type="text"
                    placeholder="Nombres"
                    className="form-data"
                    autoComplete="off"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="form-data"
                    autoComplete="off"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Teléfono"
                    className="form-data"
                    autoComplete="off"
                    name="telefono"
                    value={telefono}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Tipo identificación"
                    className="form-data"
                    autoComplete="off"
                    name="tipoIdentificacion"
                    value={tipoIdentificacion}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Identificación"
                    className="form-data"
                    autoComplete="off"
                    name="identificacion"
                    value={identificacion}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-danger"
                    onClick={handleGuardar}
                >
                    Guardar
                </button>
                {
                    JSON.stringify(state, 2)
                }
            </div>
        </div>
    )
}
