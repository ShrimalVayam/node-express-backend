import { Student } from '../../models'

const enrollSubject = async ({ subjectId, userId }) => {
  try {
    const student = await Student.findOne({ where: { userId } })
    await student.setSubjects([subjectId])
    return { success: true }
  } catch (e) {
    return { error: e }
  }
}

export default enrollSubject
