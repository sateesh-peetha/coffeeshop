/**
* call library
*/
const db = require('./config/database')
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')

/**
* port for this server
*/
port = 3000


/**
* call body parser
*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


/**
* configuration for Session.
*/
app.use(session({
    secret: 'A21E14d4_g1fdz55415_6ZRT41641ZE_561erf1e_2g1fg1fg0_e',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000 * 20}
}))

/**
* configuration for flash.
*/
app.use(flash())


/**
* Save User Object, using for all application
*/
app.get('*', (req,res,next)=> {
    res.locals.user = req.user || null
    next()
})

/**
* this config for drink route
*/
const menu = require('./routes/menu.routes')
app.use('/menu', menu);

/**
* this config for bill route
*/
const offer = require('./routes/offer.routes')
app.use('/offer', offer);

/**
* this config for food route
*/
const bill = require('./routes/bill.routes')
app.use('/bill', bill)

/**
* The 404 route page
*/
app.get('*', function(req, res){
    res.status(404).redirect('/');
});

/**
* listen to port 3000
*/
app.listen(port, ()=> {
    console.log('this application is wokring on port 3000')
})