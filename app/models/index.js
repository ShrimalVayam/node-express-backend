import Sequelize from 'sequelize'

import config from '../../config/database'
import user from './user'
import subject from './subject'
import enrollment from './subjectsEnrolled'
import teacher from './teacher'
import student from './student'

const sequelize = new Sequelize(config.database, config.username, config.password, {
  define: config.define,
  host: config.host,
  port: config.port,
  dialect: config.dialect
})

const User = user(sequelize)
const Subject = subject(sequelize)
const Enrollment = enrollment(sequelize)
const Teacher = teacher(sequelize)
const Student = student(sequelize)

User.hasMany(Teacher)
User.hasMany(Student)

Teacher.hasMany(Subject, { foreignKey: 'teacherId' })

Subject.belongsToMany(Student, { through: Enrollment, targetKey: 'userId', foreignKey: 'subjectId', onDelete: 'CASCADE' })
Student.belongsToMany(Subject, { through: Enrollment, foreignKey: 'studentId', as: 'SubjectsEnrolled' })

export { User, Subject, Enrollment, Teacher, Student }
export default sequelize
