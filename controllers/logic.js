const { admins, products,users } = require("../models/collection");


// Logic for admin login
const adminlogin = (req, res) => {
    const { uname, psw } = req.body;
    
    admins.findOne({ uname,psw }).then(user => {
        if (user) {
            res.status(200).json({
                message: "Login success",
                statusCode: 200,
                status: true
            });
        } else {
            res.status(404).json({
                message: "Login failed",
                statusCode: 404,
                status: false
            });
        }
    });
};

const addMovie=(req,res)=>{
    const {mname,description,tprice,image,rating,tavailable,catid}=req.body
    const newMovie=new products({
        mname,description,tprice,image,rating,tavailable,catid
    })
    newMovie.save()
    res.status(200).json({
        message: "new movie added",
        statusCode: 200,
        status: true
    })
}
const getMovies=(req,res)=>{
    products.find().then(data=>{
        if(data){
            res.status(200).json({
                message:data,
                statusCode: 200,
                status: true
            })
        }
    })
}
const editMovie=(req,res)=>{
    const {id}=req.params
    const {mname,description,tprice,image,rating,tavailable,catid}=req.body
    products.findOne({_id:id}).then(pdata=>{
        if(pdata){
            pdata.mname=mname
            pdata.description=description
            pdata.tprice=tprice
            pdata.image=image
            pdata.rating=rating
            pdata.tavailable=tavailable
            pdata.catid=catid

            pdata.save()
            res.status(200).json({
                message:"movie updated",
                statusCode: 200,
                status: true
            })
        }
    })
}
const deleteMovie=(req,res)=>{
    const {id}=req.params
    products.deleteOne({_id:id}).then(()=>{
        res.status(200).json({
            message:"movie deleted",
            statusCode: 200,
            status: true
        })
    })
}
const getSingleMovie=(req,res)=>{
    const {id}=req.params
    products.findOne({_id:id}).then(data=>{
        if(data){
            res.status(200).json({
                message:data,
                statusCode: 200,
                status: true
            })
        }
        else{
            res.status(404).json({
                message: "no data",
                statusCode: 404,
                status: false
            }); 
        }
    })
}

const userSignup=(req,res)=>{
    const {name,email,psw}=req.body
    users.findOne({email}).then(user=>{
        if(user){
            res.status(404).json({
                message:"already registered",
                statusCode:404,
                status:false
            })
        }
    
        else{
           newUser=new users({
            name,email,psw
           })
           newUser.save()
           res.status(200).json({
            message:"registered successfully",
            statusCode: 200,
            status: true
        })
        }
    })
}
//user login
const userlogin = (req, res) => {
    const { email, psw } = req.body;
    
    users.findOne({ email,psw }).then(user => {
        if (user) {
            res.status(200).json({
                message: "Login success",
                statusCode: 200,
                status: true,
                _id:user._id
            });
        } else {
            res.status(404).json({
                message: "Login failed",
                statusCode: 404,
                status:false
            });
        }
    });
};

const getUsers=(req,res)=>{
    users.find().then(data=>{
        if(data){
            res.status(200).json({
                message:data,
                statusCode:200,
                status:true

            })
        }
    })
}
const deleteUser=(req,res)=>{
    const {id}=req.params
   users.deleteOne({_id:id}).then(()=>{
        res.status(200).json({
            message:"User Deleted",
            statusCode: 200,
            status: true
        })
    })
}


module.exports = { adminlogin,addMovie,getMovies,editMovie,deleteMovie,getSingleMovie,userSignup,userlogin,getUsers,deleteUser};
