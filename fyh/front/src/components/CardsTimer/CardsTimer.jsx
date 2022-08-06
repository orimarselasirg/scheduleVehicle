import React from 'react';
import Timer from '../Timer/Timer'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import './cardstimer.css'

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
            <form className='field is-grouped'>
                <div className='field has-addons app'>
                    <div className='control'>
                        <input className = 'input is-small' type='text' placeholder ='Placas del vehiculos' name = 'id_vehicle' onChange={inputChanger}/>
                    </div>
                    {/* <label className='button is-static'>Placa</label> */}
                </div>
                <div className='field has-addons'>
                    <div className='control'>
                        <input className = 'input is-small' type='text' placeholder ='Bahia de trabajo' name = 'pit'onChange={inputChanger}/>
                    </div>
                    {/* <label className='button is-static'>Bahia</label> */}
                </div>
                <div className='field has-addons'>
                    <div className='control'>
                        <input  className = 'input is-small' type='text' placeholder ='conductor' name = 'driver'onChange={inputChanger}/>
                    </div>
                    {/* <label className='button is-static'>Conductor</label> */}
                </div>
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