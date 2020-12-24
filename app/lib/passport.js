import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import Sequelize from 'sequelize'

import { Errors, Messages } from '../utils/errors'
import generateJWT from '../utils/jwt'
import { Teacher, User, Student } from '../models'

const initPassport = () => {
  passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false
  },
  async function (email, password, done) {
    const user = await User.findOne({
      where: { email },
      attributes: {
        include: [
          [Sequelize.fn('COUNT', Sequelize.col('teachers.id')), 'teacher'],
          [Sequelize.fn('COUNT', Sequelize.col('students.id')), 'student']
        ]
      },
      group: ['teachers.id', 'students.id'],
      include: [{ model: Teacher }, { model: Student }]
    })
    if (user == null) {
      return done({ type: Errors.notFound, message: Messages.emailNotRegistered }, null)
    } else {
      if (!await user.comparePassword(password)) {
        return done({ type: Errors.unauthorized, message: Messages.incorrectPassword }, null)
      } else {
        const userObj = user.get({ plain: true })
        if (userObj.teacher > 0) userObj.isTeacher = true
        else userObj.isTeacher = false
        const jwtToken = await generateJWT(userObj)
        return done(null, { ...userObj, token: jwtToken })
      }
    }
  })
  )

  passport.serializeUser(function (user, done) {
    done(null, user)
  })

  passport.deserializeUser(function (obj, done) {
    done(null, obj)
  })
}

export default initPassport
