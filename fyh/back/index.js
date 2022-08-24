const express = require('express');
const cors = require("cors")
const vehicle = require('../back/routes/vehicle')
const timers = require('../back/routes/timers')
const { sequelize } = require('./db/db')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

let port = 8081
app.listen(port, () => {
    console.log('Server run on Port =>  ' + port)
    sequelize.sync({ alter: true })
})

app.use('/', vehicle)
app.use('/', timers)

// app.get('/test', async (req, res) => {
//     try {
//     console.log('ok')
//     res.status(200).json('sucessful')      
//     } catch (error) {
//         console.log(error)
//         res.status(401).json(error.message)
//     }
// })