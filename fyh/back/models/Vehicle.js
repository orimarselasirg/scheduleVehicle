const {sequelize, DataTypes, Op } = require ('../db/db')

const Vehicle = sequelize.define('vehicle', {
    vehicle_id : {
        type : DataTypes.STRING,
        allowNul : false
    }
},
{
   freezeTableName : true 
})



module.exports = Vehicle