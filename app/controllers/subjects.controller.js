import * as Responder from '../server/expressResponder'
import createSubjectService from '../services/subjects/create'
import listAllSubjectsService from '../services/subjects/listAll'

const createSubjects = async (req, res) => {
  const result = await createSubjectService({ ...req.body, ...req.user })
  Responder.checker(res, result)
}

const listAllSubjects = async (req, res) => {
  const result = await listAllSubjectsService()
  Responder.checker(res, result)
}

export { createSubjects, listAllSubjects }
