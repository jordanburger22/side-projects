const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()


async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to db')
    } catch(err){
        console.log('mongoose connection err: ', err)
    }
}

connectToDB()

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/auth', require('./routes/AuthRouter'))

app.use('/api/main/weapons', require('./routes/weaponRouter'))

app.use('/api/main/hero-class', require('./routes/HeroClassRouter'))


app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})