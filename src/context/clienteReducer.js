
export const initialState = {
    lista: [],
    activo: {},
}

export const clienteReducer = (state = initialState, action) => {

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
                lista: state.lista.map(cliente => {
                    return cliente.identificacion === action.payload.identificacion ? action.payload : cliente;
                }),
                activo: action.payload,
            }
        case 'search':
            return {
                ...state,
                activo: state.lista.filter(e => e.identificacion === action.payload.identificacion)
            }
        default:
            return state;
    }

}