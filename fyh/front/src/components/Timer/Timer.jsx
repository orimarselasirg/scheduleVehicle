import React from "react";
import { useStopwatch } from "react-timer-hook";
import {useState} from 'react'
import {finishTimer } from '../../redux/action';
import {useDispatch} from 'react-redux'
import { inputChanger } from "../../controllers/inputHandlers";
import { validator } from "../../controllers/validator";
import './timer.css'

function Timer({id_vehicle, pit, driver, tecnician}) {
    const {seconds,minutes,hours,isRunning,start,pause,reset} = useStopwatch({ autoStart: false });
    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const [data, setData] = useState ({
      kilometers : 0,
      type : '',
      datetime : '',
      time : ''
    })
    const time = `${hours}:${minutes}:${seconds}`
    // const date = new Date()
    // const timestamp = +new Date();
    // const tttt = new Date(timestamp)
    
    
    const sendData = () =>{
      if(data.kilometers === 0 || data.type === '' || data.datetime === '') return alert('Por favor completa los campos obligatorios')
      pause()
        setData({
          ...data, 
          time : time
        })
      dispatch(finishTimer(id_vehicle))
    }
    
    
  
  return (
    <div className="card block">
      <div className="card-header">
      <h1 className="card-header-title">Placa : {id_vehicle}</h1>
      <h2 className="card-header-title">Bahia : {pit}</h2>
      <h3 className="card-header-title">Conductor : {driver}</h3>
      <p className="card-header-title">Tecnico : {tecnician}</p>

      </div>
      <div className="card-content">
        <div className = 'prueba'>
          <div>
            <span className='tag is-large title-tag'>TIME :</span>
            <div className='tag is-info is-large time'>
              <span name = 'time' onChange={(e) => setData({time : e.time})} >{time}</span>
            </div>          
          </div>
          <p className="state">{isRunning ? "On pits" : "Oops! What Happen?"}</p>
        </div>
        <div className = 'form-input'>
            <form>
              <input className="input is-small" type="text" placeholder="Kilometraje" required name = 'kilometers' onChange={(e) => inputChanger(setError, validator, setData, data, e.target.name, e.target.value)}/>
              <input className="input is-small" type="text" placeholder="Tipo Vehiculo" required name = 'type' onChange={(e) => inputChanger(setError, validator, setData, data, e.target.name, e.target.value)}/>
              <input className="input is-small tag is-success is-light" type="datetime-local" required name = 'datetime' onChange={(e) => inputChanger(setError, validator, setData, data, e.target.name, e.target.value)}/>
            </form>
            {/* <p>{date.toISOString().split('T')[0]}</p> */}
        </div>
      </div>
      <div className="card-footer buttons are-small">
      <button onClick={start} className='button is-light'>Start</button>
      <button onClick={pause} className = 'button is-light'>Pause</button>
      <button onClick={reset} className = 'button is-light'>Reset</button>
      <button onClick={sendData} className = 'button is-light'>Finish Job</button>
      </div>

    </div>
  );
}

export default Timer;
