import Sequelize from 'sequelize'

import config from '../../config/database'
import user from './user'

const sequelize = new Sequelize(config.database, config.username, config.password, {
  define: config.define,
  host: config.host,
  port: config.port,
  dialect: config.dialect
})

const User = user(sequelize)

export default sequelize
