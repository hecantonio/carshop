import React, { useCallback, useEffect } from 'react'
import { useUiContext } from '../context/UiContext';
import { services } from '../helpers/services';
import { useState } from 'react';
import { useCarShopContext } from '../context/CarShopContext';
import { addMinutesDate } from '../helpers/util';
import Swal from 'sweetalert2';


export const AddService = () => {

    const { carShop, dispatch } = useCarShopContext();
    const { dispatch: dispatchUi } = useUiContext();

    const [checkedState, setCheckedState] = useState(
        new Array(services.length).fill(false)
    );
    const [checkService, setCheckService] = useState([]);
    const [duration, setDuration] = useState();

    const markOnload = useCallback(() => {
        let arrServices = [];
        if (carShop.order) {
            const { maintenance, duration } = carShop.order;
            services.map((item, index) => {
                return arrServices[index] = maintenance.some(s => s === item.name)
            });
            setDuration(duration);
            setCheckService(maintenance);
            setCheckedState(arrServices);
        }
    }, [carShop]);

    useEffect(() => {
        markOnload()
    }, [markOnload]);

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        let listService = [];

        const totalDuration = updatedCheckedState.reduce(
            (duration, currentState, index) => {
                if (currentState === true) {
                    listService.push(services[index].name)
                    return duration + services[index].duration;
                }
                return duration;
            },
            0
        );

        setCheckService(listService);
        setDuration(totalDuration);
    };

    const handleGuardar = () => {
        if (duration > 0) {
            let deliveryTime = new Date();
            let endTime = addMinutesDate(duration);
            dispatch({
                type: 'addMaintenance',
                payload: {
                    maintenance: checkService,
                    deliveryTime,
                    endTime,
                    duration: duration,
                },
            });
            dispatchUi({
                type: 'setNext',
                payload: 4,
            })
        } else {
            Swal.fire('Debe seleccionar al menos un servicios a realizar');
        }
    }

    const handleRegresar = () => {
        dispatchUi({
            type: 'setNext',
            payload: 2,
        });
    }

    return (
        <div className="card">
            <div className="card-header fs-4 fw-bold">
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
                    Continuar
                </button>
            </div>
        </div >
    )
}
