
export const initialState = {
    cliente: {},
}

export const clienteReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'add':
            return {
                ...state,
                cliente: action.payload,
            }
        case 'select':
            return {
                ...state,
            }
        default:
            return state;
    }

}