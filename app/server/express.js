import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import expressBoom from 'express-boom'
import passport from 'passport'

import initRoutes from '../routes'
import initPassport from '../lib/passport'

// Initialize express app
const app = express()

function initMiddleware () {
  // Enable cors
  app.use(cors())

  // Enable express-boom
  app.use(expressBoom())

  // Request body parsing middleware
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  app.use(bodyParser.json({ limit: '50mb' }))

  // To optimize the response performance
  app.use(compression())

  // Initialise passport
  app.use(passport.initialize())
  app.use(passport.session())
}

export function init () {
  // Initialize Express middleware
  initMiddleware()

  // Initialize modules server routes
  initRoutes(app)

  // Initialize passport
  initPassport()

  return app
}
