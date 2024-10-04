const User=require('../models/user')

const registerUser=async (req,res)=>{
    const user=req.body
    try{
        const newUSer=await User.create(user)
        res.json(newUSer)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

const getAllUser=async(req,res)=>{
    const users=await User.find();
    res.send(users);
}

const updateUser=async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators: true });
        if(!user) return res.status(404).send();
        res.send(user);
    }catch(err){
        res.status(400).send(err)
    }
}

const deleteUser=async(req,res)=>{
try{
    const user=await User.findByIdAndDelete(req.params.id);
    if(!user) return res.status(404).send();
    res.send(user);
}catch(err){
    res.status(500).send(err)
}
}
module.exports={registerUser,updateUser,deleteUser,getAllUser}