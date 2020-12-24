import { User, Teacher, Student } from '../../models'
import { Errors, Messages } from '../../utils/errors'
import generateJWT from '../../utils/jwt'

const signup = async (userDetails) => {
  try {
    const user = await User.create({ ...userDetails })
    if (userDetails.role === 'teacher') await Teacher.create({ userId: user.id })
    else await Student.create({ userId: user.id })
    const token = generateJWT(user)
    return { user, token }
  } catch (e) {
    if (e.name === 'SequelizeUniqueConstraintError') {
      return { error: { type: Errors.conflict, message: Messages.resourceConflict('subject') } }
    }
    return { error: true }
  }
}

export default signup
