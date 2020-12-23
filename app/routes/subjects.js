import express from 'express'

import * as subjectsController from '../controllers/subjects.controller'
import { validatorMiddleware, subjectsSchema } from '../validation'
import { isAuthenticated, isAuthenticatedTeacher, isAuthenticatedStudent } from '../lib/auth'

const subjectRouter = express.Router()

subjectRouter.get('/', isAuthenticated, subjectsController.listAllSubjects)

subjectRouter.post('/',
  isAuthenticatedTeacher,
  subjectsSchema.createSubject,
  validatorMiddleware(subjectsController.createSubjects)
)

subjectRouter.put('/:subjectId',
  isAuthenticatedTeacher,
  subjectsSchema.updateSubject,
  validatorMiddleware(subjectsController.updateSubject)
)

subjectRouter.delete('/:subjectId',
  isAuthenticatedTeacher,
  subjectsSchema.deleteSubject,
  validatorMiddleware(subjectsController.deleteSubject)
)

subjectRouter.post('/enroll/:subjectId',
  isAuthenticatedStudent,
  subjectsSchema.enrollSubject,
  validatorMiddleware(subjectsController.enrollSubject)
)

export default subjectRouter
