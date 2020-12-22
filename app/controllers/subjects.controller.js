import * as Responder from '../server/expressResponder'
import createSubjectService from '../services/subjects/create'

const createSubjects = async (req, res) => {
  const result = await createSubjectService({ ...req.body, ...req.user })
  Responder.checker(res, result)
}

export { createSubjects }
