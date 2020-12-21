import signupService from '../services/user/signup'
import * as Responder from '../server/expressResponder'

export const signup = async (req, res) => {
  const result = await signupService(req.body)
  if (!result.error) {
    Responder.success(res, result)
  } else {
    Responder.failed(res, result.error)
  }
}
