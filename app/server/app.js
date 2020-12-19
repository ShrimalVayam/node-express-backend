import config from '../../config/app'
import * as express from './express'
import * as db from '../../lib/sequelize'

const start = async () => {
  const port = config.get('port')
  await db.connect()
  const app = express.init()

  app.listen(port, () => console.log(`Server listening at ${port}`)) // eslint-disable-line no-console
}

export default start
