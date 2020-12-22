import { bodyExists } from '../common'

export const createSubject = [
  bodyExists('name').isLength({ max: 50 }).withMessage('The name is too long')
]
