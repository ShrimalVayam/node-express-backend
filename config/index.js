const config = require( './app' )
module.exports = {
  development: {
    username: config.get( 'db.user' ),
    password: config.get( 'db.pass' ),
    database: config.get( 'db.name' ),
    host: config.get( 'db.settings.host' ),
    dialect: 'mysql',
  }
}