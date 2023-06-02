
export const initialState = {
    clientes: [],
}

export const clienteReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'add':
            return {
                ...state,
                clientes: [action.payload, ...state.clientes]
            }
        case 'update':
            return {
                ...state,
                clientes: state.clientes.map(cliente => {
                    return cliente.id === action.payload.id ? action.payload.cliente : cliente;
                })
            }
        case 'load':
            return {
                ...state,
            }
        default:
            return state;
    }

}