import React from 'react'
import { useCarShopContext } from '../context/CarShopContext';
import { useUiContext } from '../context/UiContext';
import Swal from 'sweetalert2';

export const Order = () => {

  const { carShop: { customer, car, order }, dispatch } = useCarShopContext();
  const { dispatch: dispatchUi } = useUiContext();

  const { identificacion, nombre, telefono, email } = customer;
  const { placa, modelo, marca, nivelTanque, observaciones } = car;
  const { maintenance, deliveryTime, endTime, duration } = order;

  const handleFinalizar = () => {
    Swal.fire('Registro exitoso');
    dispatch({ type: 'delete' })
    dispatchUi({
      type: 'setNext',
      payload: 1,
    });
  }

  const handleRegresar = () => {
    dispatchUi({
      type: 'setNext',
      payload: 3,
    });
  }

  return (
    <div className="card">
      <div className="card-header fs-4 fw-bold">
        Orden de trabajo
      </div>
      <div className="card-body row g-3 align-items-center">
        <h5>Datos del cliente</h5>
        <hr />
        <div className="col-6">
          <label htmlFor="identificacion" className="col-form-label fw-bold">Identificación:</label>
          <input type="text" readOnly className="form-control-plaintext" id="identificacion" value={identificacion} />
        </div>
        <div className="col-6">
          <label htmlFor="nombre" className="col-form-label fw-bold">Nombre del propietario:</label>
          <input type="text" readOnly className="form-control-plaintext" id="nombre" value={nombre} />
        </div>
        <div className="col-6">
          <label htmlFor="contacto" className="col-form-label fw-bold">Contacto:</label>
          <input type="text" readOnly className="form-control-plaintext" id="contacto" value={telefono} />
        </div>
        <div className="col-6">
          <label htmlFor="email" className="col-form-label fw-bold">Correo electrónico:</label>
          <input type="text" readOnly className="form-control-plaintext" id="email" value={email} />
        </div>

        <h5>Datos del vehiculo</h5>
        <hr />
        <div className="col-6">
          <label htmlFor="placa" className="col-form-label fw-bold">Placa:</label>
          <input type="text" readOnly className="form-control-plaintext" id="placa" value={placa} />
        </div>
        <div className="col-6">
          <label htmlFor="marca" className="col-form-label fw-bold">Marca:</label>
          <input type="text" readOnly className="form-control-plaintext" id="marca" value={marca} />
        </div>
        <div className="col-6">
          <label htmlFor="modelo" className="col-form-label fw-bold">Modelo:</label>
          <input type="text" readOnly className="form-control-plaintext" id="modelo" value={modelo} />
        </div>
        <div className="col-6">
          <label htmlFor="nivelTanque" className="col-form-label fw-bold">Nivel de tanque:</label>
          <input type="text" readOnly className="form-control-plaintext" id="nivelTanque" value={nivelTanque} />
        </div>
        <div className="col-12">
          <label htmlFor="observaciones" className="col-form-label fw-bold">Observaciones:</label>
          <input type="text" readOnly className="form-control-plaintext" id="observaciones" value={observaciones} />
        </div>

        <div className="col-6">
          <label htmlFor="fechaEntrega" className="col-form-label fw-bold">Fecha entrega:</label>
          <input type="text" readOnly className="form-control-plaintext" id="fechaEntrega" value={deliveryTime.toLocaleString()} />
        </div>
        <div className="col-6">
          <label htmlFor="fechaFinalizacion" className="col-form-label fw-bold">Fecha finalización:</label>
          <input type="text" readOnly className="form-control-plaintext" id="fechaFinalizacion" value={endTime.toLocaleString()} />
        </div>
        <div className="col-6">
          <label htmlFor="duracion" className="col-form-label fw-bold">Duración:</label>
          <input type="text" readOnly className="form-control-plaintext" id="duracion" value={duration + ' min.'} />
        </div>

        <h5>Servicios a realizar</h5>
        <hr />
        {
          maintenance.map((e, i) =>
          (<div className="form-check" key={i}>
            <input className="form-check-input" type="checkbox" value="" id={`services${i}`} />
            <label className="form-check-label" htmlFor={`services${i}`}>
              {e}
            </label>
          </div>)
          )
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
          onClick={handleFinalizar}
        >
          Finalizar
        </button>
      </div>
    </div >
  )
}
