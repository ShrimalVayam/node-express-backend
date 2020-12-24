import { Enrollment } from '../../models'
import { Errors, Messages } from '../../utils/errors'

const updateAttendance = async ({ attendance, subjectId, studentId }) => {
  try {
    const enrollment = await Enrollment.findOne({ where: { subjectId, studentId } })
    if (!enrollment) throw { error: { type: Errors.notFound, message: Messages.resourceNotFound('Enrollment') } }
    await enrollment.update({ attendance })
    return { enrollment }
  } catch (error) {
    return error.error ? error : { error: true }
  }
}

export default updateAttendance
