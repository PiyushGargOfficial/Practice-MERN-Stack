const express = require('express');
const router = express.Router();
require('../Db/connect')
const User = require('../Db/models/userSchema');
const bcrypt = require("bcryptjs")

router.post('/register', (req,res,)=> {
  
const {name, email, phone, password, cpassword, work} = req.body;

if(!name || !email || !phone || !password || !cpassword || !work){
    res.status(422).json({error: "A required field is left empty"})
}

User.findOne({email: email})
.then((userExist)=>{
    if(userExist){
      return res.status(422).json({error: "Email already exists"})
    }else if(password != cpassword){
        res.status(400).json({error: "Passwords do not match..."})
    }else{

    const user = new User({name, email, phone, password, cpassword, work});
    user.save().then(()=>{
        res.status(201).json({message: "User Registration Successful"})
    })
    .catch(err => res.status(500).json({error: "User Registration Failed"}))}
})
.catch(err => console.log(err))
})

router.post('/login',  (req,res) => {
    const {email, password}  = req.body;

    User.findOne({email:email})
    .then((userExist) => {
        if(userExist){
            if(bcrypt.compare(password, userExist.password)){
                const token = userExist.generateAuthToken()
                .then((token) => {
                res.cookie('jwtToken', token, {
                    maxAge: 25892000000,
                    httpOnly: true
                })    
                res.status(201).json({message: `Welcome ${userExist.name}`})
                })
                .catch(err => console.log(err));

            }
            else {
                res.status(401).json({error: "Invalid Credentials"})
            }
        }
        else{
            res.status(500).json({error:"Invalid Credentials"})
        }
    })
    .catch(err => res.status(500).json({error: "Invalid Credentials"}))
})

module.exports = router