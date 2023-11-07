const express = require('express')
const handlebars = require('express-handlebars').engine;
const path = require('node:path')


const configViewEngine = (app) => {
    app.use(express.static('./src/public'))
    app.engine(
        'hbs',
        handlebars({
            extname: '.hbs',
            helpers: {
                // sum(a, b) { return a + b; },
                // foo() { return 'FOO!'; },
                // bar() { return 'BAR!'; }
            }
        }));
    app.set('view engine', 'hbs')
    app.set('views',path.join(__dirname,'../api/views') )
}

module.exports = configViewEngine