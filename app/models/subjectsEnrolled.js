import Sequelize from 'sequelize'

export default (connObj) => connObj.define('subjectsEnrolled', {
  attendance: {
    type: Sequelize.INTEGER,
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
