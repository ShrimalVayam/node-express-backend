import { Enrollment, Student, Subject } from '../../models'
import { Errors, Messages } from '../../utils/errors'

const enrollSubject = async ({ subjectId, userId }) => {
  try {
    const student = await Student.findOne({ where: { userId } })
    if (!student) throw { error: { type: Errors.notFound, message: 'Student Not Found' } }

    const subject = await Subject.findByPk(subjectId)
    if (!subject) throw { error: { type: Errors.notFound, message: 'Subject Not Found' } }

    await Enrollment.create({ subjectId, studentId: userId })

    return { success: true }
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return { error: { type: Errors.conflict, message: Messages.enrollmentExists } }
    }
    return err.error ? err : { error: true }
  }
}

export default enrollSubject
