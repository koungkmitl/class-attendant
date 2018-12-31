const { Router } = require('express')
const auth = require('./auth')
const course = require('./course')
const student = require('./student')
const participation = require('./participation')
const log = require('../log')
const permission = require('../services/permission')

const routes = Router()

routes.get('/', permission, (req, res, next) => {
  const logger = log('GET /')
  res
    .status(200)
    .json(req.session)
  logger.info('return session information')
})

routes.use(auth)
routes.use(course)
routes.use(student)
routes.use(participation)

module.exports = routes
