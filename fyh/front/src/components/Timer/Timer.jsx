import React from "react";
import { useStopwatch } from "react-timer-hook";
import {useState} from 'react'
import {finishTimer } from '../../redux/action';
import {useDispatch} from 'react-redux'
import { createVehicle } from "../../redux/action";
import { inputChanger } from "../../controllers/inputHandlers";
import { validator } from "../../controllers/validator";
import swal from 'sweetalert'
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
    
    
    const sendData = () =>{
      if(data.kilometers === 0 || data.kilometers === '' || data.type === '' || data.datetime === '' || error.length > 0 ) return swal({
        title: "ALTO",
        text: `Tienes campos obligatorios que estan vacios`,
        icon: "error",
        button: "Ok",
      });
      pause()
        setData({
          ...data, 
          time : time
        })
      dispatch(createVehicle(id_vehicle))
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
          <p className="state">{isRunning ? "On pits!" : "Something goes wrong?"}</p>
        </div>
        <div className = 'form-input'>
            <form>
              <input className="input is-small" type="text" placeholder="Kilometraje" required name = 'kilometers' onChange={(e) => inputChanger(setError, validator, setData, data, e.target.name, e.target.value)}/>
              {error.kilometers ? <p className="has-text-danger is-size-7">Debe ingresar un numero</p> : ''}
              <input className="input is-small" type="text" placeholder="Tipo Vehiculo" required name = 'type' onChange={(e) => inputChanger(setError, validator, setData, data, e.target.name, e.target.value)}/>
              {error.type ? <p className="has-text-danger is-size-7">No puede estar vacio</p> : ''}
              <input className="input is-small tag is-success is-light" type="datetime-local" required name = 'datetime' onChange={(e) => inputChanger(setError, validator, setData, data, e.target.name, e.target.value)}/>
              {error.datetime ? <p className="has-text-danger is-size-7">Seleccione fecha y hora</p> : ''}
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
