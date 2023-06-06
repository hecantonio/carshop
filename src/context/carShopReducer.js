
export const initialState = {
    customer: {
        tipoIdentificacion: '',
        identificacion: '',
        nombre: '',
        email: '',
        telefono: '',
    },
    car: {
        placa: '',
        marca: '',
        modelo: '',
        nivelTanque: '',
        observaciones: '',
    },
    order: {        
        maintenance: [],
        deliveryTime: '',
        endTime: '',
        duration: 0,
    },
}

export const carShopReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'addCustomer':
            return {
                ...state,
                customer: action.payload,
            }
        case 'addVehicle':
            return {
                ...state,
                car: action.payload,
            }
        case 'addMaintenance':
            return {
                ...state,
                order: {
                    maintenance: action.payload.maintenance,
                    duration: action.payload.duration,
                    deliveryTime: action.payload.deliveryTime,
                    endTime: action.payload.endTime,
                }
            }
        case 'select':
            return {
                ...state,
            }
        default:
            return state;
    }

}