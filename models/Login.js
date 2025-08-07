const mongoose=require('mongoose')

const userLoginSchema=new mongoose.Schema({
    username:String,
    password:String
})
const Login=mongoose.model('Login',userLoginSchema)

module.exports=Login