
export const uiInitialState = {
    loading: false,
    darkMode: false,
    next: 1
}


export const uiReducer = (state = uiInitialState, action) => {

    switch (action.type) {
        case 'setDarkMode':
            return {
                ...state,
                darkMode: action.payload
            }
        case 'setNext':
            return {
                ...state,
                next: action.payload
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