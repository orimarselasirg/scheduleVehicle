const Timers = require('.././models/Timers');
const vehicle = require('../models/Vehicle')


module.exports = {
    getAllTimers : async ()=> {
        const allTimers = await Timers.findAll()
        return allTimers
    },
    createTimer : async (pit, driver, technician, hours, minutes, seconds, kilometers, type, date, vehicle_id)=> {
        const vehicleFound = await vehicle.findOne({where : {vehicle_id : vehicle_id}})
        const newTime = await Timers.create({pit, driver, technician, hours, minutes, seconds, kilometers, type, date})
        await newTime.setVehicle(vehicleFound.dataValues.id)
        return newTime
    },
    deleteTimer : async (id)=> {
        return await Timers.destroy({where : {id : id}})

    }
}
