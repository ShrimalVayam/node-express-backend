import Sequelize from 'sequelize'

export default (connObj) => connObj.define('student', {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true
  }
})
