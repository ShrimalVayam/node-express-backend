import { Subject } from '../../models'
import { Errors, Messages } from '../../utils/errors'

const listAllSubjects = async () => {
  try {
    const subjects = await Subject.findAll({ raw: true })
    return subjects
  } catch (e) {
    return { error: { type: Errors.conflict, message: Messages.resourceConflict('subject') } }
  }
}

export default listAllSubjects
