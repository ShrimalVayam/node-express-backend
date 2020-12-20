import Sequelize from 'sequelize'

export default (connObj) => connObj.define('subject', {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
})
