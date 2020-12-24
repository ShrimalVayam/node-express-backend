import { Student, Subject } from '../../models'

const viewAttendance = async ({ userId }) => {
  try {
    const studentDetails = await Student.findOne({
      where: { userId },
      include: [{
        model: Subject,
        through: {
          attributes: ['attendance']
        },
        attributes: ['id', 'name', 'type']
      }]
    })

    return studentDetails
  } catch (e) {
    return { error: true }
  }
}

export default viewAttendance
