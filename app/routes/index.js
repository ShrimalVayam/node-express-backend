import userRouter from './user'
import subjectsRouter from './subjects'

const initRoutes = app => {
  app.post('/_ping', (req, res) => {
    res.send('ok')
  })
  app.use('/user', userRouter)
  app.use('/subjects', subjectsRouter)
}

export default initRoutes
