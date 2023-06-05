import React from 'react'
import { useForm } from '../hooks/useForm'
import { useVehiculoContext } from '../context/VehiculoContext';
import { useClienteContext } from '../context/ClienteContext';
import { useUiContext } from '../context/UiContext';


export const AddVehiculo = () => {

    const { vehiculo, dispatch } = useVehiculoContext();
    const { cliente: {activo: { identificacion, nombre }} } = useClienteContext();
    const { dispatch: dispatchUi } = useUiContext();

    const [formValues, handleInputChange, reset] = useForm({
        identificacion,
        placa: '',
        marca: '',
        modelo: '',
        nivelTanque: '',
        observaciones: '',
    });

    const { placa, marca, modelo, nivelTanque, observaciones } = formValues;

    const handleGuardar = () => {
        dispatch({
            type: 'add',
            payload: formValues,
        });
        reset();
        dispatchUi({
            type: 'setNext',
            payload: 'Servicios',
        })
    }

    const handleRegresar = () => {
        dispatchUi({
            type: 'setNext',
            payload: '',
        })
    }

    return (
        <div className="card">
            <div className="card-header fw-bold">
                Datos del vehículo
            </div>
            <div className="card-body">
                <div className="mb-3 row">
                    <label htmlFor="nombreTitular" className="col-sm-2 col-form-label fw-semibold">Nombre propietario:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="nombreTitular"
                            name="nombreTitular"
                            value={nombre}
                            disabled={true}
                        /> </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="placa" className="col-sm-2 col-form-label fw-semibold">Placa:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="placa"
                            name="placa"
                            value={placa}
                            onChange={handleInputChange}
                        /> </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="marca" className="col-sm-2 col-form-label fw-semibold">Marca:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="marca"
                            name="marca"
                            value={marca}
                            onChange={handleInputChange}
                        /> </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="modelo" className="col-sm-2 col-form-label fw-semibold">Modelo:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="modelo"
                            name="modelo"
                            value={modelo}
                            onChange={handleInputChange}
                        /> </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="nivelTanque" className="col-sm-2 col-form-label fw-semibold">Nivel tanque gasolina:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="nivelTanque"
                            name="nivelTanque"
                            value={nivelTanque}
                            onChange={handleInputChange}
                        /> </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="observaciones" className="col-sm-2 col-form-label fw-semibold">Obervaciones:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="observaciones"
                            name="observaciones"
                            value={observaciones}
                            onChange={handleInputChange}
                        /> </div>
                </div>
                {
                    JSON.stringify(vehiculo, null, 10)
                }
            </div>
            <div className="card-footer bg-transparent text-end">
                <button
                    className="btn btn-secondary me-2"
                    onClick={handleRegresar}
                >
                    Atrás
                </button>                
                {
                    (vehiculo && vehiculo.acivo) ? (
                        <button
                            className="btn btn-primary"
                            onClick={handleGuardar}
                        >
                            Continuar
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary"
                            onClick={handleGuardar}
                        >
                            Guardar y continuar
                        </button>
                    )
                }
            </div>
        </div>
    )
}
