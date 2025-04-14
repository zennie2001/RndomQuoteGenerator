let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors");
const { signupModel } = require("./APP/Models/signup");
const quotes = require('./Quotes.json')



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



mongoose.connect("mongodb+srv://jennydev:mypass@cluster2.8ioe9pq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2").then(()=>{
    console.log("connected to MongoDB")
    app.listen(2000, () => {
        console.log('Server is running on port 2000');
      });
    
}).catch(err => console.error("MongoDB connection error:", err));



