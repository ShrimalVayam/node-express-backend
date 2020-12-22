import signupService from '../services/user/signup'
import passport from 'passport'

import * as Responder from '../server/expressResponder'

export const signup = async (req, res) => {
  const result = await signupService(req.body)
  if (!result.error) {
    Responder.success(res, result)
  } else {
    Responder.failed(res, result.error)
  }
}

export const login = async (req, res) => {
  return passport.authenticate('local', (error, user) => {
    if (error) Responder.failed(res, error)
    else Responder.success(res, user)
  })(req, res)
}
