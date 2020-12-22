import { body } from 'express-validator'

const bodyExists = (field, errorMessage = 'This field is required') => body(field).exists().withMessage(errorMessage)

const bodyOptional = (field) => body(field).optional()

const lengthMessage = (fieldName, min, max) => {
  let message = `The ${fieldName} should be `
  if (min) message = message + `a minumum of ${min} `
  if (max) message = message + `and a maximum of ${max} `
  return message + 'characters'
}
export { bodyExists, bodyOptional, lengthMessage }
