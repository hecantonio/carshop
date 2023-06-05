
export const vehiculoInitialState = {
    lista: [],
    activo: {},
}

export const vehiculoReducer = (state = vehiculoInitialState, action) => {

    switch (action.type) {
        case 'add':
            return {
                ...state,
                lista: [...state.lista, action.payload],
                activo: action.payload,
            }
        case 'update':
            return {
                ...state,
                lista: state.lista.map(vehiculo => {
                    return vehiculo.placa === action.payload.identificacion ? action.payload : vehiculo;
                }),
                activo: action.payload,
            }
        case 'search':
            return {
                ...state,
                activo: state.lista.filter(e => e.placa === action.payload.placa)
            }
        default:
            return state;
    }

}