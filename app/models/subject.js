import Sequelize from 'sequelize'

export default (connObj) => connObj.define('subject', {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  type: {
    type: Sequelize.STRING(50),
    defaultValue: 'theoretical'
  }
},
{
  indexes: [
    {
      unique: true,
      fields: ['teacherId', 'name']
    }
  ]
})
