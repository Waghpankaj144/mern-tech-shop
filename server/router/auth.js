const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate')


require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello from about server router ");
});

//using async await --code of user registration
router.post("/register",async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body; //object destructuring

  // console.log(name);
  // console.log(email);
  // console.log(req.body);   //req.body fetches the all data after clicking on register button
//   res.json({message : req.body})
 //   res.send("register page")

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "please fill the empty fields !!" });
  }

try{
    const userExist  = await User.findOne({ email: email })

    if (userExist) {
        return res.status(422).json({ error: "email already exist !!" });
       }

       const user = new User( {name, email, phone, work, password, cpassword} ); //cutly brackets are important 
       
       await user.save();
       res.status(201).json({ messsage: "user registered successfully " });
       

}catch(err){
    console.log(err);
}
    //using promises
    // router.post("/register", (req, res) => {
    //     const { name, email, phone, work, password, cpassword } = req.body; //object destructuring
      
        // console.log(name);
        // console.log(email);
        // console.log(req.body);   //req.body fetches the all data after clicking on register button
      //   res.json({message : req.body})
       //   res.send("register page")
      
    //     if (!name || !email || !phone || !work || !password || !cpassword) {
    //       return res.status(422).json({ error: "please fill the empty fields !!" });
    //     }
      
    //     User.findOne({ email: email })
    //       .then((userExist) => {
    //         if (userExist) {
    //          return res.status(422).json({ error: "email already exist !!" });
    //         }
    //         const user = new User( {name, email, phone, work, password, cpassword} ); //cutly brackets are important 
            
    //         user.save()
    //           .then(() => {
    //                res.status(201).json({ messsage: "user registered successfully " });
    //           })
    //           .catch((err) => res.status(500).json({ error: " registraion failed" }));
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
});


//login route page code
router.post('/signin' , async (req, res)=>{
    // console.log(req.body);
    // res.json({message : "awsome"})
 
    try{
        let token;
        const {email , password} = req.body;
        if(!email || !password){
                return res.status(400).json({error: "invalid"})
        }
        const userLogin =  await User.findOne({email: email});

        // console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
             token = await userLogin.generateAuthToken()
             console.log(token);
             res.cookie("jwtoken" , token, {
              expires : new Date(date.now() + 259000000),//expires sessionn 
              httpOnly : true
             });  //jwttoken is the name given to cookie 

            if(!isMatch){
                res.status(400).json({error:  " Invalid credentials"})
            }else{
                res.json({message : "user logged in successfully "});
            }

        } else{
            res.status(400).json({error:  " Invalid credentials"})
        }
       
       
       
    }catch(err){
        console.log(err);
    }
})

router.get ('/about', authenticate, (req,res)=>{
    console.log("hello  about app.js");
    res.send(req.rootUser)
  });

  router.get ('/products', authenticate, (req,res)=>{
    console.log("hello  about app.js");
    res.send(req.rootUser)
  });

  router.get ('/getData', authenticate, (req,res)=>{
    console.log("hello  about app.js");
    res.send(req.rootUser)
  });

module.exports = router;
