import Sequelize from 'sequelize'

import config from '../../config/database'
import user from './user'
import subject from './subject'
import enrollment from './subjectsEnrolled'

const sequelize = new Sequelize(config.database, config.username, config.password, {
  define: config.define,
  host: config.host,
  port: config.port,
  dialect: config.dialect
})

const User = user(sequelize)
const Subject = subject(sequelize)
const Enrollment = enrollment(sequelize)

User.hasMany(Subject, { foreignKey: 'teacherId' })
Subject.belongsToMany(User, { through: Enrollment, foreignKey: 'studentId' })

export { User, Subject, Enrollment }
export default sequelize
