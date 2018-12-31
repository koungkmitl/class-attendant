const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const routes = require('./routes')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('../models')
const cors = require('cors')

const app = express()

// enable cors
app.use(cors({
  credentials: true,
  origin: '*'
}))




// Dsiable x-powered-by for Scripting
app.disable('x-powered-by')

// Get Environment Variable
const { NODE_ENV, SECRET_KEY } = process.env

// Logging
if (NODE_ENV === 'development')
  app.use(morgan('dev'))

// Body Parser application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Static File
// app.use(express.static(path.join(__dirname, '../public')))

const sess = {
  secret: SECRET_KEY || 'h&*j23jsdlx09', // SECRET_KEY only on development
  resave: true,
  saveUninitialized: false,
  cookie: { 
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  },
  store: new SequelizeStore({
    db: db.sequelize
  })
}

// Enable proxy and https
// if (NODE_ENV === 'production') {
//   app.set('trust proxy', 1)
//   sess.cookie.secure = true
// }

// Session using Sequelize ORM for MySQL
app.use(session(sess))

// enable access control allow origin
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// Routing
app.use(routes)

// Handle 404 Not Found
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  err.message = "Not Found"
  next(err)
})
  
// Handle 500 Internal Server Error
app.use((err, req, res, next) => { 
  res
    .status(err.status || 500)
    .json({
      message: err.message || 'Internal Server Error'
    })
})

module.exports = app
