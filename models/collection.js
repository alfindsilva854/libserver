//import mongoose
const mongoose=require('mongoose')

//define schema-fields and values of model
// (Collection)
const adminSchema = new mongoose.Schema({
    uname:String,
    psw:String
})

//create the admin model
const admins=new mongoose.model("admins",adminSchema)


const productSchema=new mongoose.Schema({
    mname:String,
    description:String,
    tprice:String,
    image:String,
    catid:Number,
    tavailable:String,
    rating:Number
})

//model
const products=new mongoose.model("products",productSchema)

//user
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    psw:String
})
const users=new mongoose.model("users",userSchema)


//export model -to import in another files
module.exports={admins,products,users}