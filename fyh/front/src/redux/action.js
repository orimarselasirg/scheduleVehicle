import {API_URL, ADD_TIMER, FINISH_TIMER, GET_ALL_VEHICLES, CREATE_VEHICLE} from "./constans"

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
export function getAllVehicle() {
    return function (dispatch) {
        return fetch(`${API_URL}/vehicles`)
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: GET_ALL_VEHICLES,
                    payload: data
                })
            })
    }
}
export function createVehicle(vehicle_id) {
    return function (dispatch) {
        return fetch(`${API_URL}/vehicles`, {
            method: 'POST',
            body: JSON.stringify({vehicle_id : vehicle_id}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

