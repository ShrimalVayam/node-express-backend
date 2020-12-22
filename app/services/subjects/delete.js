import { Subject } from '../../models'
import { Errors } from '../../utils/errors'

const updateSubject = async ({ subjectId, userId }) => {
  try {
    const subject = await Subject.findByPk(subjectId)

    if (!subject) throw { error: { type: Errors.notFound } }

    if (subject.teacherId !== userId) throw { error: { type: Errors.forbidden } }

    await subject.destroy()
    return { success: true }
  } catch ({ error }) {
    return { error } || { error: true }
  }
}

export default updateSubject
