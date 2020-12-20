import Sequelize from 'sequelize'

import bcrypt from 'bcrypt'
const salt = bcrypt.genSaltSync(10)

export default (connObj) => {
  const User = connObj.define('user', {
    name: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
      set (password) {
        const passHash = bcrypt.hashSync(password, salt)
        this.setDataValue('password', passHash)
      }
    },
    isTeacher: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  })

  User.prototype.comparePassword = async (password) => password ? await bcrypt.compare(password, this.pass) : false
  return User
}
