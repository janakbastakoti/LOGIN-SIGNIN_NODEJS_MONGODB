const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.json())
const PORT = 3000
const { mogoUrl } = require('./keys')



require('./models/User')

const requireToken = require('./middleware/requireToken')
const authRoutes = require('./Routes/authRoutes')
app.use(bodyParser.json())
app.use(authRoutes)


// database setup
mongoose.connect(mogoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
	console.log("connected to mongo ........")
})

mongoose.connection.on('error',(err)=>{
	console.log("error occured to mongo ........",err)
})
// end setup



app.get('/',requireToken,(req,res)=>{
    res.send('your email is '+ req.user.email)
})

app.listen(PORT,()=>{
	console.log("server running"+ PORT)
})