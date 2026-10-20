import express from 'express'
import mongoose from 'mongoose'


const app=express()
const port=3000;

const conn=await mongoose.connect("mongodb://localhost:27017/")
.then(console.log("Connected "))
.catch(Error)
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})