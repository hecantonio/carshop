import React from 'react'
import { useCarShopContext } from '../context/CarShopContext';
import { useUiContext } from '../context/UiContext';

export const Order = () => {

  const { carShop: { customer, car, order } } = useCarShopContext();
  const { dispatch: dispatchUi } = useUiContext();

  const { identificacion, nombre, telefono, email } = customer;
  const { placa, modelo, marca, nivelTanque, observaciones } = car;
  const { maintenance, deliveryTime, endTime, duration } = order;

  const handleFinalizar = () => {
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
          <label htmlFor="staticEmail2" className="col-form-label fw-bold">Identificación:</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value={identificacion} />
        </div>
        <div className="col-6">
          <label htmlFor="staticEmail2" className="col-form-label fw-bold">Nombre del propietario:</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value={nombre} />
        </div>
        <div className="col-6">
          <label htmlFor="staticEmail2" className="col-form-label fw-bold">Contacto:</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value={telefono} />
        </div>
        <div className="col-6">
          <label htmlFor="staticEmail2" className="col-form-label fw-bold">Correo electrónico:</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value={email} />
        </div>

        <h5>Datos del vehiculo</h5>
        <hr />
        <div className="col-6">
          <label htmlFor="staticEmail2" className="col-form-label fw-bold">Placa:</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value={placa} />
        </div>
        <div className="col-6">
          <label htmlFor="staticEmail2" className="col-form-label fw-bold">Marca:</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value={marca} />
        </div>
        <div className="col-6">
          <label htmlFor="staticEmail2" className="col-form-label fw-bold">Modelo:</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value={modelo} />
        </div>
        <div className="col-6">
          <label htmlFor="staticEmail2" className="col-form-label fw-bold">Nivel de tanque:</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value={nivelTanque} />
        </div>
        <div className="col-auto">
          <label htmlFor="staticEmail2" className="col-form-label fw-bold">Observaciones:</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value={observaciones} />
        </div>

        <div className="col-6">
          <label htmlFor="staticEmail2" className="col-form-label fw-bold">Fecha entrega:</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value={deliveryTime} />
        </div>
        <div className="col-6">
          <label htmlFor="staticEmail2" className="col-form-label fw-bold">Fecha finalización:</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value={endTime} />
        </div>
        <div className="col-6">
          <label htmlFor="staticEmail2" className="col-form-label fw-bold">Duración:</label>
          <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value={duration+' min.'} />
        </div>


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
