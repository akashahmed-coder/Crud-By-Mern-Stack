require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const router = require('./router')
const app = express()
app.use(express.json())
app.use(router)
app.use(cors())

const DB = process.env.DATABASE
const threat = {useNewUrlParser: true,useUnifiedTopology: true}

mongoose.connect(DB,threat).then(()=>{
    console.log("database connection successfull")
}).catch((e)=>{
    console.log(e)
})

app.get("/",(req,res)=>{
    res.send("hi")
})
app.listen(5000,()=>{
    console.log("server is running sucessfull")
})