const {sequelize, DataTypes, Op } = require ('../db/db')

const Timers = sequelize.define('timers', {
    pit : {
        type : DataTypes.INTEGER,
        allowNul : false
    },
    driver : {
        type : DataTypes.STRING,
        allowNul : false
    },
    technician : {
        type : DataTypes.STRING,
        allowNul : false
    },
    hours : {
        type : DataTypes.INTEGER,
        allowNul : false
    },
    minutes : {
        type : DataTypes.INTEGER,
        allowNul : false
    },
    seconds : {
        type : DataTypes.INTEGER,
        allowNul : false
    },
    kilometers : {
        type : DataTypes.INTEGER,
        allowNul : false
    },
    type : {
        type : DataTypes.STRING,
        allowNul : false
    },
    date : {
        type : DataTypes.STRING,
        allowNul : false
    }
},
{
//    freezeTableName : true 
})

const {vehicle, timers} = sequelize.models

vehicle.hasMany(timers)
timers.belongsTo(vehicle)

module.exports = Timers