const express = require('express');
const config = require('config');
const path = require('path');
const mongoose = require('mongoose');




const app = express();
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.json({
    extended: true
}))

//Login route
app.use('/api/auth', require('./routes/auth.routes'))


// Для хироку
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
})



// const PORT = config.get('port')||5000;

const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => {
            console.log(`app has been on port ${PORT} started`)
        })
    } catch (e) {
        console.log('Server error')
        process.exit(1)
    }
}

start()