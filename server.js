const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')

const connectDB = require('./util/database.js')
const userrouter = require('./router/userrouter.js')


const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use('/user',userrouter)

const start=async()=>{
try{
    const connect=await connectDB();
    app.listen(8080,()=>{
        console.log('The server started at the port number 8080')
    })
}catch(err){
console.log(err)
}
};
start();