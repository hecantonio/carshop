
export const initialState = {
    customer: {
        tipoIdentificacion: '',
        identificacion: '',
        nombre: '',
        email: '',
        telefono: '',
    },
    order: {
        car: {
            placa: '',
            marca: '',
            modelo: '',
            nivelTanque: '',
            observaciones: '',
        },
        maintenance: [],
        endingTime: '',
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
                order: { car: action.payload },
            }
        case 'addMaintenance':
            return {
                ...state,
                order: {
                    maintenance: action.payload.maintenance,
                    duration: action.payload.duration,
                    endingTime: action.payload.endingTime,
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