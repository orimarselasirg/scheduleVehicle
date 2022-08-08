import { START, ADD_TIMER, FINISH_TIMER } from "./constans"


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
        case FINISH_TIMER :
            return {
                ...state,
                timers : state.timers.filter(e => e.id_vehicle !== action.payload)
            }
        default:
            return state
    }
}