import config from '../../config/app'
import * as express from './express'
// import db from '../app/db/models'

const start = async () => {
  const port = config.get('port')

  const app = express.init()

  app.listen(port, () => console.log(`Server listening at ${port}`))
}

export default start
