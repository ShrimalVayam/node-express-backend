import express from 'express'

import * as studentsController from '../controllers/students.controller'

import { isAuthenticatedStudent } from '../lib/auth'

const studentRouter = express.Router()

studentRouter.get('/attendance', isAuthenticatedStudent, studentsController.viewAttendance)

export default studentRouter
