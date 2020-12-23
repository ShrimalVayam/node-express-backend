import { Subject } from '../../models'
import { Errors, Messages } from '../../utils/errors'

const createSubject = async ({ name, type, userId }) => {
  try {
    const subject = await Subject.create({ name, type, teacherId: userId })
    return subject
  } catch (e) {
    if (e.name === 'SequelizeUniqueConstraintError') {
      return { error: { type: Errors.conflict, message: Messages.resourceConflict('subject') } }
    }
    return { error: true }
  }
}

export default createSubject
