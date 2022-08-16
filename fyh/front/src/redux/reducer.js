import {ADD_TIMER, FINISH_TIMER, GET_ALL_VEHICLES, CREATE_VEHICLE } from "./constans"


const initialState = {
    timers: [],
    vehicles : []
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
        case GET_ALL_VEHICLES :
            return {
                ...state,
                vehicles : action.payload
            }
        default:
            return state
    }
}