const express=require('express')
const { registerUser, getAllUser, updateUser, deleteUser } = require('../controller/usercontroller')
const user = require('../models/user')

const userrouter=express.Router()
userrouter.post('/',registerUser)
userrouter.get('/',getAllUser)
userrouter.put('/:id',updateUser)
userrouter.delete('/:id',deleteUser)

module.exports=userrouter