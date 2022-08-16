const Vehicle = require ('../models/Vehicle')


module.exports = {
    getAllVehicle : async ()=> {
        const dataVehicle = await Vehicle.findAll()
        if(dataVehicle.length === 0){
            console.log('no data')
            return 'no data found'
        } else {
            return dataVehicle
        }
    },
    createVehicle : async (id) =>{
        const vehicleIdFound = await Vehicle.findOne({where : {vehicle_id : id.toUpperCase()}})
        if(!vehicleIdFound){
            const createdVehicle = await Vehicle.create({vehicle_id : id.toUpperCase()})
            return createdVehicle
        } else {
            return 'This Vehicle ID is already exists'
        }
    },
    modifyVehicle : async (vehicleId, newVehicleId) =>{
        const vehicleIdFound = await Vehicle.findOne({where : {vehicle_id : vehicleId.toUpperCase()}})
    
        if(!vehicleIdFound){
            return 'This Vehicle ID is not exists'
        } else {
            const modifyVehicle = await Vehicle.update({vehicle_id : newVehicleId},{where : {vehicle_id : vehicleId.toUpperCase()}})
            return `the vehicle with id ${vehicleId.toUpperCase()}, has been updated successfully with id ${newVehicleId.toUpperCase()}`
        }
    },
    deleteVehicle : async (id) => {
        const vehicleIdFound = await Vehicle.findOne({where : {vehicle_id : id.toUpperCase()}})
        if(!vehicleIdFound){
            return 'This Vehicle ID is not exists'
        } else {
            const deleteVehicle = await Vehicle.destroy({where : {vehicle_id : id.toUpperCase()}})
            return deleteVehicle
        }
    }
}