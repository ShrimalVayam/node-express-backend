import * as Responder from '../server/expressResponder'
import createSubjectService from '../services/subjects/create'
import listAllSubjectsService from '../services/subjects/listAll'
import updateSubjectService from '../services/subjects/update'
import deleteSubjectService from '../services/subjects/delete'

const createSubjects = async ({ body, user }, res) => {
  const result = await createSubjectService({ ...body, ...user })
  Responder.checker(res, result)
}

const listAllSubjects = async (req, res) => {
  const result = await listAllSubjectsService()
  Responder.checker(res, result)
}

const updateSubject = async ({ body, params, user: { userId } }, res) => {
  const result = await updateSubjectService({ ...body, ...params, userId })
  Responder.checker(res, result)
}

const deleteSubject = async ({ params, user: { userId } }, res) => {
  const result = await deleteSubjectService({ ...params, userId })
  Responder.checker(res, result)
}

export { createSubjects, listAllSubjects, updateSubject, deleteSubject }
