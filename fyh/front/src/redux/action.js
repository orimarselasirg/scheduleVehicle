import {API_URL,START, ADD_TIMER, FINISH_TIMER} from "./constans"

export const finishTimer = (id) =>{
return( {
    type : FINISH_TIMER,
    payload : id
})
}

export const addTimer = (data) => {
    return (
        {
            type: ADD_TIMER,
            payload: data
        }
    )
}