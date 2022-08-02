import { START, ADD_TIMER } from "./constans"


const initialState = {
    timers: [],
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TIMER:
            return {
                ...state,
                timers : [...state.timers, action.payload]
            }
        default:
            return state
    }
}