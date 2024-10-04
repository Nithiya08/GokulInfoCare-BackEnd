const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, validate: /\S+@\S+\.\S+/ },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true }
    }
})
module.exports=mongoose.model('User',UserSchema,'userdetails')