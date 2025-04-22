let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors");
const { signupModel } = require("./APP/Models/signup");
const quotes = require('./Quotes.json')
require('dotenv').config()

let port = process.env.port || 2050
let mongoDBURL = process.env.MONGODB_URL

console .log(quotes.length)


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

app.get('/quote' , (req, res)=>{
   
    let randomQuoteIndex = (Math.random()*quotes.length) | 0 
   res.send(quotes[randomQuoteIndex] )
})



mongoose.connect(mongoDBURL).then(()=>{
    console.log("connected to MongoDB")
    app.listen(port, () => {
        console.log('Server is running ');
      });
    
}).catch(err => console.error("MongoDB connection error:", err));



