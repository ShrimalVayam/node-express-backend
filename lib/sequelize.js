import sequelize from '../app/models'

const connect = async () => {
  await sequelize.authenticate()
  return sequelize.sync()
}

const disconnect = async () => {
  await sequelize.close()
}

export { connect, disconnect }
