import { validationResult } from 'express-validator'

import * as Responder from '../server/expressResponder'
import { Errors } from '../utils/errors'

const validatorMiddleware = (controller) => (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const { param, msg } = errors.array()[0]
    const message = `${param} : ${msg}`
    Responder.failed(res, { type: Errors.badRequest, message })
    return
  }
  controller(req, res, next)
}

export default validatorMiddleware
