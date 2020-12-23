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
      unique: true,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
      set (password) {
        const passHash = bcrypt.hashSync(password, salt)
        this.setDataValue('password', passHash)
      }
    }
  })

  User.prototype.comparePassword = async function (password) {
    if (!password) {
      return false
    }
    const result = await bcrypt.compare(password, this.password)
    return result
  }
  return User
}
