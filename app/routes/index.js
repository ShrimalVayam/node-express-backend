const initRoutes = app => {
  app.post('/_ping', (req, res) => {
    res.send('ok')
  })
  // app.use('/', router)
}

export default initRoutes
