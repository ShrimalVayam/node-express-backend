import config from './app'

const env = config.get('env')

const dbConfig = {
  development: {
    username: config.get('db.user'),
    password: config.get('db.pass'),
    database: config.get('db.name'),
    host: config.get('db.settings.host'),
    port: config.get('db.settings.port'),
    dialect: config.get('db.settings.dialect')
  }
}

export default dbConfig[env]
