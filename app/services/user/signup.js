import { User } from '../../models'
import { Errors, Messages } from '../../utils/errors'
import generateJWT from '../../utils/jwt'

const signup = async (userDetails) => {
  const checkUserExists = await User.findOne({ where: { email: userDetails.email } })
  if (!checkUserExists) {
    try {
      const user = await User.create({ ...userDetails, isTeacher: userDetails.role === 'teacher' })
      const token = generateJWT(user)
      return { user, token }
    } catch (e) {
      return {
        error: { type: Errors.internal, message: Messages.internal }
      }
    }
  } return {
    error: { type: Errors.forbidden, message: Messages.emailAlreadyRegistered }
  }
}

export default signup
