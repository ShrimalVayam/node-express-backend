import userRouter from './user'

const initRoutes = app => {
  app.post('/_ping', (req, res) => {
    res.send('ok')
  })
  app.use('/user', userRouter)
}

export default initRoutes
