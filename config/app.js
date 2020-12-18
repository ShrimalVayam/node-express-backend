const convict = require('convict')

const config = convict({
  app: {
    name: {
      doc: 'Toothsie',
      format: String,
      default: 'Toothsie'
    }
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'dev'],
    default: 'dev',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 12345,
    env: 'port'
  },
  db: {
    format: Object,
    default: {
      name: 'coaching',
      user: 'root',
      pass: 'rails',
      settings: {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        operatorsAliases: false,
        pool: {
          max: 40,
          min: 0,
          idle: 10000
        },
      },
    },
    env: 'db'
  }
})

const env = config.get('env')
const envFilePath = 'env.' + env + '.json'
config.loadFile(envFilePath)

config.validate({ allowed: 'strict' })

module.exports = config