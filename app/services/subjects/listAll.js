import { Subject } from '../../models'

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
