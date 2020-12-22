import jwt from 'jsonwebtoken'

import config from '../../config/app'
import * as Responder from '../server/expressResponder'
import { Errors } from '../utils/errors'

const checkAuth = async (req, res) => {
  const { headers: { authorization } } = req
  const token = authorization && authorization.split(' ')[1]
  try {
    const { payload: { email, id, isTeacher } } = await jwt.verify(token, config.get('jwt.secretToken'))
    return { email, id, isTeacher }
  } catch (e) {
    Responder.failed(res, { type: Errors.unauthorized })
  }
}

const isAuthenticated = async (req, res, next) => {
  req.user = await checkAuth(req, res)
  next()
}

const isAuthenticatedTeacher = async (req, res, next) => {
  req.user = await checkAuth(req, res)
  if (req.user && req.user.isTeacher) next()
  else Responder.failed(res, { type: Errors.forbidden })
}

const isAuthenticatedStudent = async (req, res, next) => {
  req.user = await checkAuth(req, res)
  if (req.user && !req.user.isTeacher) next()
  else Responder.failed(res, { type: Errors.forbidden })
}

export { isAuthenticated, isAuthenticatedTeacher, isAuthenticatedStudent }
