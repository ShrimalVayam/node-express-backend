import { bodyExists } from '../common'

export const signup = [
  bodyExists('username'),
  bodyExists('name'),
  bodyExists('email').isEmail().withMessage('Please enter a valid email'),
  bodyExists('password'),
  bodyExists('role').isIn(['teacher', 'student'])
]
