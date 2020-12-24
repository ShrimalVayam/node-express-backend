import Sequelize from 'sequelize'

export default (connObj) => connObj.define('subjectsEnrolled', {
  attendance: {
    type: Sequelize.INTEGER.UNSIGNED,
    defaultValue: 0
  }
}, {
  indexes: [
    {
      unique: true,
      fields: ['studentId', 'subjectId']
    }
  ]
}
)
