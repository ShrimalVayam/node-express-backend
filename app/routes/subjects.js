import express from 'express'

import * as subjectsController from '../controllers/subjects.controller'
import { validatorMiddleware, subjectsSchema } from '../validation'
import { isAuthenticated, isAuthenticatedTeacher } from '../lib/auth'

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

export default subjectRouter
