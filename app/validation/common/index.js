import { body } from 'express-validator'

const bodyExists = (field, errorMessage = 'This field is required') => body(field).exists().withMessage(errorMessage)

export { bodyExists }
