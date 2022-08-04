import React from 'react';
import Timer from '../Timer/Timer'
import {useDispatch} from 'react-redux'
import {useState} from 'react'

function CardsTimer(props) {
    const dispatch = useDispatch()
    // const [timer, setTimer] = useState(false)
    const [vehicle, setVehicle] = useState([])
    const [data, setData] = useState({
        id_vehicle : '',
        pit : '',
        driver: '',
    })
    function activateTimer(){
        // setTimer(true)
        setVehicle([...vehicle, data])
    }
    
    const inputChanger =(e)=>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div>
            <form>
            <input type='text' placeholder ='Placas del vehiculos' name = 'id_vehicle' onChange={inputChanger}/>
            <label>Placa</label>
            <input type='text' placeholder ='Bahia de trabajo' name = 'pit'onChange={inputChanger}/>
            <label>Bahia</label>
            <input type='text' placeholder ='Placas del vehiculos' name = 'driver'onChange={inputChanger}/>
            <label>Conductor</label>
            <input className = 'button is-small is-dark' type="button" value="Set Timer" onClick={activateTimer} />       
            </form>
            <div className='container'>
                {
                    vehicle?.map(e =>(
                        <Timer key={e.id_vechile} id_vehicle = {e.id_vehicle} pit={e.pit} driver = {e.driver}/>
                    ))
                }
            </div>
        </div>
    );
}

export default CardsTimer;