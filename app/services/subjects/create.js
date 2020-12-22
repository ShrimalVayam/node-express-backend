import { Subject } from '../../models'
import { Errors, Messages } from '../../utils/errors'

const createSubject = async ({ name, userId }) => {
  try {
    const subject = await Subject.create({ name, teacherId: userId })
    return subject
  } catch (e) {
    let error = { type: Errors.internal }
    if (e.name === 'SequelizeUniqueConstraintError') {
      error = { type: Errors.conflict, message: Messages.resourceConflict('subject') }
    }
    return { error }
  }
}

export default createSubject
