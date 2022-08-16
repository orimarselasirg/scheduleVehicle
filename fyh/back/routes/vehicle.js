const { Router } = require('express')
const router = Router();
const {getAllVehicle, createVehicle, modifyVehicle, deleteVehicle} = require ('../controller/vehicle')

router.get('/vehicles', async(req, res)=>{
    try {
        res.status(201).json(await getAllVehicle())
    } catch (error) {
        res.status(401).send({
            name : error.name,
            msg : error.message
        })
    }
})

router.post('/vehicles', async  (req, res) => {
    let {vehicle_id} = req.body
    try {
        res.status(201).json(await createVehicle(vehicle_id))
    } catch (error) {
        res.status(401).send({
            name : error.name,
            msg : error.message
        })
    }
})

router.delete('/vehicles', async  (req, res) => {
    let {vehicle_id} = req.body
    try {
        res.status(201).json(await deleteVehicle(vehicle_id))
    } catch (error) {
        res.status(401).send({
            name : error.name,
            msg : error.message
        })
    }
})

router.put('/vehicles/:vehicle_id', async  (req, res) => {
    let {new_id} = req.body
    let {vehicle_id} = req.params
    try {
        res.status(201).json(await modifyVehicle(vehicle_id, new_id))
    } catch (error) {
        res.status(401).send({
            name : error.name,
            msg : error.message
        })
    }
})
module.exports = router