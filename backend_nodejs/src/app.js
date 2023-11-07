const express = require('express')
const app=express()
const dotenv = require('dotenv')
const path = require('node:path')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const cors = require('cors')



//init middleware
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({}))
app.use(express.static(path.join(__dirname, '../public')))
app.use(helmet())
app.use(morgan('dev'))
app.use(compression())
app.use(cors())


//init database
require('./config/initMongoDB')


//init views




//init routes
app.use('/admin', require('./routes/index'))



//handling error



module.exports = app