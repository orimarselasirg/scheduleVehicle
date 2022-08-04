import React from "react";
import { useStopwatch } from "react-timer-hook";
import {useState} from 'react'
import { addTimer } from '../../redux/action';
import {useDispatch} from 'react-redux'
import './timer.css'

function Timer({id_vehicle, pit, driver}) {
    const {seconds,minutes,hours,isRunning,start,pause,reset} = useStopwatch({ autoStart: false });
    const dispatch = useDispatch()
    const addTime =()=>{
        dispatch(addTimer(id_vehicle, pit, driver, hours, minutes, seconds))
        pause()
    }

  return (
    <div className="card block">
      <div className="card-header">
      <h1 className="card-header-title">Placa : {id_vehicle}</h1>
      <h2 className="card-header-title">Bahia : {pit}</h2>
      <h3 className="card-header-title">Conductor: {driver}</h3>

      </div>
      <div className="card-content">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      <p>{isRunning ? "On pits" : "Oops! What Happen?"}</p>
      </div>
      <div className="card-footer buttons are-small">
      <button onClick={start} className='button is-light'>Start</button>
      <button onClick={pause} className = 'button is-light'>Pause</button>
      <button onClick={reset} className = 'button is-light'>Reset</button>
      <button onClick={addTime} className = 'button is-light'>Finish Job</button>
      </div>

    </div>
  );
}

export default Timer;
