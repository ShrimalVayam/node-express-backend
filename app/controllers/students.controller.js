import * as Responder from '../server/expressResponder'
import viewAttendanceService from '../services/students/viewAttendance'

const viewAttendance = async ({ user }, res) => {
  const result = await viewAttendanceService({ ...user })
  Responder.checker(res, result)
}

export { viewAttendance }
