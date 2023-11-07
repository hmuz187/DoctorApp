const express = require('express')
const app = express()
require('dotenv').config
const path = require('node:path')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')

const configViewEngine = require('./config/initViewEngine')

const handlebars = require('express-handlebars').engine;

//init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false, limit: '30mb'}))
// app.use(express.static(path.join(__dirname, 'public')))

// app.use(helmet())
app.use(helmet({ contentSecurityPolicy: false }))
app.use(morgan('dev'))
app.use(compression())



//init database
require('./config/initMongodb')


//init views
// configViewEngine(app)
app.use(express.static(path.join(__dirname, 'public')))
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum(a, b) { return a + b; },
            // foo() { return 'FOO!'; },
            // bar() { return 'BAR!'; }
        }
    }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './api/views'));


//init routes
app.use('/v1/admin', require('./api/routes/index'))

//handling errors
app.use((req, res, next)=> {
    error = new Error(`Not Found`)
    error.status = 404
    next(error)
})

app.use((error, req, res, next)=>{
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message ? error.message : `Internal server error!`
    })
})

module.exports = app