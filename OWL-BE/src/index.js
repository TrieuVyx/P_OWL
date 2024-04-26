
const express = require('express')
const routers = require('./routers')
const db = require("./models/connect/")
const app = express()

routers(app)
db.connect()
app.listen(process.env.PORTBE,() => {
    console.log( `🚀 server is running on port http://${process.env.HOST}:${process.env.PORTBE}/${process.env.V1}`)
})

 