import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

import { Errors, Messages } from '../utils/errors'
import generateJWT from '../utils/jwt'
import { User } from '../models'

const initPassport = () => {
  passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false
  },
  async function (email, password, done) {
    const user = await User.findOne({ where: { email } })
    if (user == null) {
      return done({ type: Errors.notFound, message: Messages.emailNotRegistered }, null)
    } else {
      if (!await user.comparePassword(password)) {
        return done({ type: Errors.unauthorized, message: Messages.incorrectPassword }, null)
      } else {
        const userObj = user.get({ plain: true })
        const jwtToken = await generateJWT(user)
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
