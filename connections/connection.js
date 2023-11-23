// create model
const mongoose=require('mongoose')

mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("___Mongodb Atlas Connected__");
}).catch(()=>{
    console.log("__Mdb Atlas Not Connected__");
})