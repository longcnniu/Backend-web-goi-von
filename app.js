const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
var cors = require('cors')

//Routers
const accountRouter = require('./routers/account')
const homeRouter = require('./routers/Home')
const loanRouter = require('./routers/Loan')
const loanCTRouter = require('./routers/Loan')

dotenv.config()

//conet DB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

connectDB()
const port = 5000
//===============================================================
const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/v1/', accountRouter)
app.use('/v1/', loanRouter)
app.use('/v1', loanCTRouter)
app.use('/v1',homeRouter)
//===============================================================
app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${process.env.port} vs ${port}`)
})