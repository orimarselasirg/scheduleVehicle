import React from 'react';
import Timer from '../Timer/Timer'
import {useDispatch, useSelector} from 'react-redux'
import { addTimer} from '../../redux/action';
import {useState, useEffect} from 'react'
import { inputChanger } from '../../controllers/inputHandlers';
import { validator } from '../../controllers/validator';
import swal from 'sweetalert'
import './cardstimer.css'

function CardsTimer(props) {
    
    const dispatch = useDispatch()
    const timers = useSelector(state => state.timers)
    const [error, setError] = useState({})
    const [data, setData] = useState({
        id_vehicle : '',
        pit : '',
        driver: '',
        tecnician : ''
    })

    function activateTimer(){
        if(error.length > 0) return alert(`tienes un campo con errores`)
        if(data.id_vehicle === '' || data.pit === '' || data.driver === '' || data.tecnician === '') return alert('no puedes tener campos vacios')
        if(timers.find(e => e.id_vehicle === data.id_vehicle)){
            // alert(`El vehiculo con placas ${data.id_vehicle} ya esta en los Pits`)
            swal({
                title: "ATENCIÓN",
                text: `El vehiculo con placas ${data.id_vehicle} ya esta en los Pits`,
                icon: "error",
                button: "Ok",
              });
        } else {
            dispatch(addTimer(data))
            setData({  
                id_vehicle : '',
                pit : '',
                driver: '',
                tecnician : ''
        })
            document.getElementById('form-pit').reset()
        }
    }

    return (
        <div>
            <form className='field is-grouped' id = 'form-pit'>
                <div className='field has-addons app'>
                    <div className='control'>
                        <input required className = {error.id_vehicle ? 'input is-small is-danger' :'input is-small is-success' } type='text' placeholder ='Placas del vehiculos' name = 'id_vehicle' onChange={(e) => inputChanger(setError, validator, setData, data, e.target.name, e.target.value)}/>
                        {error.id_vehicle && <p className='has-text-danger is-size-7'>{error.id_vehicle}</p>}
                    </div>
                </div>
                <div className='field has-addons'>
                    <div className='control'>
                        <input className = {error.pit ? 'input is-small is-danger' :'input is-small is-success' } type='text' placeholder ='Bahia de trabajo' name = 'pit'onChange={(e) => inputChanger(setError, validator, setData, data, e.target.name, e.target.value)}/>
                        {error.pit && <p className='has-text-danger is-size-7'>{error.pit}</p>}
                    </div>
                </div>
                <div className='field has-addons'>
                    <div className='control'>
                        <input  className = {error.driver ? 'input is-small is-danger' :'input is-small is-success' } type='text' placeholder ='Conductor' name = 'driver'onChange={(e) => inputChanger(setError, validator, setData, data, e.target.name, e.target.value)}/>
                        {error.driver && <p className='has-text-danger is-size-7'>{error.driver}</p>}
                    </div>
                </div>
                <div className='field has-addons'>
                    <div className='control'>
                        <input  className = {error.tecnician ? 'input is-small is-danger' :'input is-small is-success' } type='text' placeholder ='Tecnico' name = 'tecnician' onChange={(e) => inputChanger(setError, validator, setData, data, e.target.name, e.target.value)}/>
                        {error.tecnician && <p className='has-text-danger is-size-7'>{error.tecnician}</p>}
                    </div>
                </div>
                {data.id_vehicle === '' || data.pit === '' || data.driver === '' || data.tecnician === '' || error.pit ? <input className = 'button is-small is-dark' type="button" value="Set Timer" disabled/> : <input className = 'button is-small is-dark' type="button" value="Set Timer" onClick={activateTimer}/>}
            </form>
            <div className='container'>
                {
                        timers?.map(e =>(
                            <Timer key={e.id_vehicle} id_vehicle = {e.id_vehicle} pit={e.pit} driver = {e.driver} tecnician = {e.tecnician}/>
                        ))
                }
            </div>
        </div>
    );
}

export default CardsTimer;