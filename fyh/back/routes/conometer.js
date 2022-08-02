const { Router } = require('express')
const router = Router();
const {start} = require('../controller/cronometer')

router.post('/start', async(req, res)=>{
let {second, minute, hour} = req.body
try {
    res.status(201).json(start(second, minute, hour))
} catch (error) {
    console.log(error)
    res.status(401).json(error.message)
}
})


module.exports = router