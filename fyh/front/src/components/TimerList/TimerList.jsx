import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllVehicle} from '../../redux/action'

function TimerList(props) {
    const dispatch = useDispatch()
    function listVehicle(){
        dispatch(getAllVehicle())
    }

    return (
        <div>
            <button onClick={listVehicle}>lsitar vehiculos</button>
        </div>
    );
}

export default TimerList;