const User =require('../models/UsersModel')
const createUser= async (req,res)=>{
    const {full_name, email, password}= req.body
    const user= new User({full_name,email,password})
    await user.save();
res.status(200).json({msg:'Usuario creado',data: user})
}
const getUsers= async(req,res)=>{
    const users= await User.find()
    console.log(users);
    res.status(200).json({msg:'Ok',data: users})
}
module.exports= {createUser, getUsers}