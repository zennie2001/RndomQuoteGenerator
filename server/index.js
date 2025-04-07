let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors");
const { signupModel } = require("./APP/Models/signup");
  

let app = express();

app.use(cors());
app.use(express.json())

app.post("/register", (req, res)=>{
  signupModel.create(req.body)
  .then(register => res.json(register))
  .catch(err => res.json(err))  
})

app.post("/login" , (req, res)=>{
    const {email, password} = req.body
    signupModel.findOne({email :email})
    .then(user =>{
        if(user) {
            if(user.password === password){
                res.json("success")
            }else{
                res.json("password incorrect")
            }
        }else{
            res.json("no record existed")
        }
    })
})

mongoose.connect("mongodb://127.0.0.1:27017/QuoteGenerator").then(()=>{
    console.log("connected to MongoDB")
    app.listen("2000")
})