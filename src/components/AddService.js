import React from 'react'
import { useForm } from '../hooks/useForm'
import { useVehiculoContext } from '../context/VehiculoContext';
import { useClienteContext } from '../context/ClienteContext';
import { useUiContext } from '../context/UiContext';
import { services } from '../helpers/services';
import { useState } from 'react';


export const AddService = () => {

    const { dispatch: dispatchUi } = useUiContext();

    const [checkedState, setCheckedState] = useState(
        new Array(services.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    const handleGuardar = () => {
        /*dispatch({
            type: 'add',
            payload: formValues,
        });
        reset();
        dispatchUi({
            type: 'setNext',
            payload: 'Servicios',
        })*/
    }

    const handleRegresar = () => {
        dispatchUi({
            type: 'setNext',
            payload: 'Vehiculos',
        });
    }

    return (
        <div className="card">
            <div className="card-header fw-bold">
                Selección de servicios
            </div>
            <div className="card-body">
                {
                    services.map(({ key, name }, index) => {
                        return (
                            <div className="form-check" key={index}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={key}
                                    value={key}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)} />
                                <label className="form-check-label" htmlFor={`custom-checkbox-${index}`}>
                                    {name}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
            <div className="card-footer bg-transparent text-end">
                <button
                    className="btn btn-secondary me-2"
                    onClick={handleRegresar}
                >
                    Atrás
                </button>
                <button
                    className="btn btn-primary"
                    onClick={handleGuardar}
                >
                    Guardar y continuar
                </button>
            </div>
        </div >
    )
}
