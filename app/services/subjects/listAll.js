import { Subject } from '../../models'
import { Errors } from '../../utils/errors'

const listAllSubjects = async () => {
  try {
    const subjects = await Subject.findAll({ raw: true })
    return subjects
  } catch (e) {
    return {
      error: true
    }
  }
}

export default listAllSubjects
