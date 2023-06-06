
export const uiInitialState = {
    loading: false,
    msgError: null,
    next: 1
}


export const uiReducer = (state = uiInitialState, action) => {

    switch (action.type) {
        case 'setError':
            return {
                ...state,
                msgError: action.payload
            }
        case 'setNext':
            return {
                ...state,
                next: action.payload
            }
        case 'removeError':
            return {
                ...state,
                msgError: null
            }
        case 'startLoading':
            return {
                ...state,
                loading: true
            }
        case 'finishLoading':
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }

}