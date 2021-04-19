const express = require('express');
const router = express.Router();
require('../Db/connect')
const User = require('../Db/models/userSchema');

router.post('/register', (req,res,)=> {
  
const {name, email, phone, password, cpassword, work} = req.body;

if(!name || !email || !phone || !password || !cpassword || !work){
    res.status(422).json({error: "A required field is left empty"})
}

User.findOne({email: email})
.then((userExist)=>{
    if(userExist){
      return res.status(422).json({error: "Email already exists"})
    }

    const user = new User({name, email, phone, password, cpassword, work});
    user.save().then(()=>{
        res.status(201).json({message: "User Registration Successful"})
    })
    .catch(err => res.status(500).json({error: "User Registration Failed"}))
})
.catch(err => console.log(err))

})

module.exports = router