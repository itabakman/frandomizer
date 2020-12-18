const express = require('express');
const config = require('config');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user')



const app = express();

app.use(express.json({extended:true}))

//Login route
app.use('/api/auth', require('./routes/auth.routes'))



const PORT = config.get('port')||5000;

async function start(){
 try {
     await mongoose.connect(config.get('mongoUri'),{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex: true
     })
     app.listen(PORT,()=>{console.log(`app has been on port ${PORT} started`)})
 } catch (e) {
     console.log('Server error')
     process.exit(1)
 }
}

start()