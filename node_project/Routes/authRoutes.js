const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../keys')
const mongoose = require('mongoose')
const User = mongoose.model('User');



router.post('/signup', async (req,res)=>{
	console.log(req.body)
	const {email,password} = req.body;

	// const {email} = req.body.email;
	// const {password} = req.body.email;
	// console.log(email)
	// console.log(password)
	// // res.send("ok")
	// const email = 'hai@g.com'
	// const password = '123456789'
	try{
		const user = new User({email,password});
		await user.save();
		console.log(user)
		const token = jwt.sign({userId:user._id},jwtkey)
		res.send({token})
	}catch(err){
		res.status(422).send(err.message)
	}


})

router.post('/signin',async (req,res)=>{

    const {email,password} = req.body
 //    const email = 'hai@g.com'
	// const password = '123456789'
    
    if(!email || !password){
        return res.status(422).send({error :"must provide email or password"})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({error :"must provide email or password"})
    }
    try{
      await user.comparePassword(password);    
      const token = jwt.sign({userId:user._id},jwtkey)
      res.send({token})
    }catch(err){
        return res.status(422).send({error :"must provide email or password"})
    }
    


})


module.exports = router