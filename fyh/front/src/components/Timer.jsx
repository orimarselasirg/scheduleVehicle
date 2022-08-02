import React from "react";
import { useStopwatch } from "react-timer-hook";
import {useState} from 'react'
import { addTimer } from '../redux/action';
import {useDispatch} from 'react-redux'

function Timer({id_vehicle, pit, driver}) {
    const {seconds,minutes,hours,isRunning,start,pause,reset} = useStopwatch({ autoStart: false });
    const dispatch = useDispatch()
    const addTime =()=>{
        dispatch(addTimer(id_vehicle, pit, driver, hours, minutes, seconds))
        pause()
    }

  return (
    <div>
      <h1>placa : {id_vehicle}</h1>
      <h2>Bahia : {pit}</h2>
      <p>Conductor: {driver}</p>
      <div>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? "On pits" : "race finished"}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
      <button onClick={addTime}>Finish Job</button>

    </div>
  );
}

export default Timer;
