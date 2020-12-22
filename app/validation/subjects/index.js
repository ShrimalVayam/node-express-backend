import { bodyExists, bodyOptional, lengthMessage, paramExists } from '../common'

const { oneOf } = require('express-validator')

export const createSubject = [
  bodyExists('name').isLength({ min: 5, max: 50 }).withMessage(lengthMessage('name', 5, 50)),
  bodyOptional('type').isLength({ min: 5, max: 15 }).withMessage(lengthMessage('type', 5, 15))
]

export const updateSubject = [
  paramExists('subjectId').isInt(),
  oneOf([
    bodyExists('name').isLength({ min: 5, max: 50 }).withMessage(lengthMessage('name', 5, 50)),
    bodyExists('type').isLength({ min: 5, max: 15 }).withMessage(lengthMessage('type', 5, 15))
  ])]

export const deleteSubject = [
  paramExists('subjectId').isInt()]
