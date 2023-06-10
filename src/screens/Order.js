import React from 'react'
import { useCarShopContext } from '../context/CarShopContext';
import { useUiContext } from '../context/UiContext';
import Swal from 'sweetalert2';
import { Card } from '../components/Card';
import { PlainText } from '../components/PlainText';

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
    <Card
      title="Orden de trabajo"
      onFinish={handleFinalizar}
      onRegresar={handleRegresar}
    >
      <div className='row'>

        <h6 className="mt-2 fw-bold">DATOS GENERALES:</h6>
        <hr />
        <PlainText
          label="fechaRecepcion"
          title="Fecha recepción:"
          value={deliveryTime.toLocaleString()}
        />
        <PlainText
          label="fechaEntrega"
          title="Fecha entrega:"
          value={endTime.toLocaleString()}
        />
        <PlainText
          label="duracion"
          title="Duración:"
          value={duration + ' min.'}
        />

        <h6 className="mt-2 fw-bold">DATOS CLIENTE:</h6>
        <hr />
        <PlainText
          label="identificacion"
          title="Identificación:"
          value={identificacion}
        />
        <PlainText
          label="nombre"
          title="Nombre del propietario:"
          value={nombre}
        />
        <PlainText
          label="contacto"
          title="Contacto:"
          value={telefono}
        />
        <PlainText
          label="email"
          title="Correo electrónico:"
          value={email}
        />

        <h6 className="mt-2 fw-bold">DATOS VEHICULO:</h6>
        <hr />
        <PlainText
          label="placa"
          title="Placa:"
          value={placa}
        />
        <PlainText
          label="marca"
          title="Marca:"
          value={marca}
        />
        <PlainText
          label="modelo"
          title="Modelo:"
          value={modelo}
        />
        <PlainText
          label="nivelTanque"
          title="Nivel de tanque:"
          value={nivelTanque}
        />
        <PlainText
          columnSize={12}
          label="observaciones"
          title="Observaciones:"
          value={observaciones}
        />

        <h6 className="mt-2 fw-bold">ACTIVIDADES A REALIZARSE:</h6>
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
    </Card>
  )
}
