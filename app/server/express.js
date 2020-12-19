import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'

import initRoutes from '../routes'

// Initialize express app
const app = express()

function initMiddleware () {
  // Enable cors
  app.use(cors())

  // Request body parsing middleware
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  app.use(bodyParser.json({ limit: '50mb' }))

  // To optimize the response performance
  app.use(compression())
}

export function init () {
  // Initialize Express middleware
  initMiddleware()

  // Initialize modules server routes
  initRoutes(app)

  return app
}
