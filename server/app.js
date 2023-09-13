const dotenv = require("dotenv")
const express = require('express')
const app = express();
const mongoose = require('mongoose')

dotenv.config({path : './config.env'})


const PORT = process.env.PORT || 3000;  
require('./db/conn')
app.use(express.json());  //node does not understand json so this line makes it understandable converts data inot objects
//linking the router files
app.use(require('./router/auth'))
// const USER = require('./model/userSchema');

//middleware
// const middleware=(req,res,next)=>{
//     console.log("hello midlleware");
//     next();
// }

// app.get ('/', (req,res)=>{
//     res.send("hello from server")
// });

// app.get ('/about', (req,res)=>{
//     console.log("hello midlleware about app.js");
//     res.send("hello from about server")
// });

app.get ('/contact', (req,res)=>{
    res.send("hello from contact server")
});

app.get ('/signin', (req,res)=>{
    res.send("hello from signin server")
});

app.get ('/signup', (req,res)=>{
    res.send("hello from signup server")
});


if(process.env.NODE_ENV == "production"){
    app.use(express.static("tech-shop/build"));
    const path = require("path");
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
    
}


app.listen(PORT,()=>{
    console.log(`running ${PORT}`);
})