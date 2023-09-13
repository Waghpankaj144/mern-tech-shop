const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    } ,
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    work : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cpassword : {
        type : String,
        required : true
    },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]
})



//turning passord into hash password
userSchema.pre('save' ,  async function(next) { 
    if(this.isModified('password')){
            this.password = await bcrypt.hash(this.password,12);
            this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
})

//we are generating a token
userSchema.methods.generateAuthToken = async function(){
    try{
            let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
            //sign takes two parameter 1st is payload which is has to be unique 
            //unique id is available in the databse & 2nd is secret key 
            this.tokens = this.tokens.concat({token : token });
            await token.save;
            return token;
    }catch(err){
        console.log(err)
    }
}

const User = mongoose.model('USER' , userSchema);
module.exports = User;