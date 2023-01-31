const express = require('express')
const cors = require('cors')
const cookieSession = require('cookie-session')
const passport = require('passport')
const morgan = require('morgan')

const { createServer } = require('http')

require('dotenv').config()

const configPassport = require('./config/passport')
const configMongoose = require('./config/mongoose')

const routes = require('./routes')
const middlewares = require('./middlewares')

const PORT = process.env.PORT || 8000

const app = express()
const server = createServer(app)

configPassport()

/**
 * Middlewares
 */
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
  origin: process.env.CORS_ORIGINS || '*',
  credentials: true,
  allowedHeaders: [
    'Origin', 'X-Requested-With', 'Content-Type',
    'Accept', 'X-Access-Token'
  ]
}))
app.use(cookieSession({
  maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
  keys: [process.env.COOKIE_KEY]
}))
app.use(passport.initialize())
app.use(passport.session())

/**
 * Routes
 */
app.use('/auth', routes.auth)
app.use('/api', middlewares.auth.base, routes.api)


async function main () {
  /**
   * Configure Database
   *
   * > Test the connection with DB.
   * > Sync all defined models to the DB.
   * > Preload Stocks table if empty.
   */
  try {
    await configMongoose()
  } catch (error) {
    console.error('Unable to configure mongoose:', error)
    process.exit(1)
  }
  require('./models')

  /**
   * Main server
   */
  server.listen(PORT, () => {
    console.log(`server listenning on ${PORT}`)
  })
}

main()
