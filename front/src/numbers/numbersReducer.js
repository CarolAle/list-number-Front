const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PHONE_NUMBERS':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}