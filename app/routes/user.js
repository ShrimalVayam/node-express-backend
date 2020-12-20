import express from 'express'

import { validatorMiddleware, userSchema } from '../validation'
import * as userController from '../controllers/user.controller'

const userRouter = express.Router()

userRouter.post('/signup', userSchema.signup, validatorMiddleware(userController.signup))

export default userRouter
