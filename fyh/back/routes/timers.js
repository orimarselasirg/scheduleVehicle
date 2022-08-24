const { Router } = require('express')
const router = Router();
const {getAllTimers, createTimer, deleteTimer} = require('../controller/timers')

router.get('/timers', async(req, res)=>{
    try {
        res.status(201).json(await getAllTimers())
    } catch (error) {
        res.status(401).send({
            name : error.name,
            msg : error.message
        })
    }
})

router.post('/timers', async (req, res) => {
    const {pit, driver, technician, hours, minutes, seconds, kilometers, type, date, vehicle_id} = req.body
    try {
    res.json(await createTimer(pit, driver, technician, hours, minutes, seconds, kilometers, type, date, vehicle_id))
    } catch (error) {
        res.status(401).send({
            name : error.name,
            msg : error.message
        })
    }
})

router.delete('/timers', async (req, res) => {
    const {id} = req.body
    try {
        res.json(await deleteTimer(id))
    } catch (error) {
        res.status(401).send({
            name : error.name,
            msg : error.message
        })
    }
})

module.exports = router