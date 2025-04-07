let mongoose = require('mongoose')

let signupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
});

//creating model
let signupModel = mongoose.model("register", signupSchema)
module.exports={signupModel}