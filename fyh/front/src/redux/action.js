import {API_URL,START, ADD_TIMER} from "./constans"

// export function actionTest() {
//     return function (dispatch) {
//         return fetch(`${API_URL}/test`)
//             .then(res => res.json())
//             .then(data => {
//                 dispatch({
//                     type: ACTION_TEST,
//                     payload: data
//                 })
//             })
//     }
// }

export const addTimer = (id_vehicle, pit, driver, hours, minutes, seconds) => {
    return (
        {
            type: ADD_TIMER,
            payload: {
                id_vehicle: id_vehicle,
                pit: pit,
                driver: driver,
                hours: hours,
                minutes: minutes,
                seconds:seconds
            }
        }
    )
}