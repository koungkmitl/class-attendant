const { Router } = require('express')
const { validationResult, body } = require('express-validator/check')
const userService = require('../services/authService')
const error = require('../services/error')
const permission = require('../services/permission')
const log = require('../log')

const routes = Router()

routes.post('/register', [
  body('email', 'email error')
    .exists().isEmail()
    .trim(),
  body('password', "password error")
    .exists().isLength({ min: 8 })
    .trim(),
  body('firstname', 'firstname error')
    .not().isEmpty().exists()
    .trim().escape(),
  body('lastname', 'lastname error')
    .not().isEmpty().exists()
    .trim().escape()
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() })
  }

  const logger = log('POST /register')

  try {
    const credential = await userService.create(req.body)
    res
      .status(201)
      .json({
        message: "Created"
      })
    logger.info(`Email=${credential.email} Register uccessful`)
  } catch (e) {
    logger.warn(e)
    return next(error(422, 'Unprocessable Entity'))
  }
})

routes.post('/login', [
  body('email', 'email error')
    .exists().isEmail()
    .trim(),
  body('password', 'password error')
    .exists().isLength({ min: 8 })
    .trim()
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() })
  }

  const logger = log('POST /login')

  try {
    const login = await userService.checkLogin(req.body)
    if (login) {
      req.session.role = 'user'
      req.session.email = req.body.email
      res
        .status(200)
        .json({
          message: 'OK'
        })
      logger.info(`Email=${req.session.email} Login successful`)
    } else {
      res
        .status(401)
        .json({
          message: 'Unauthorized'
        })
      logger.info(`Email=${req.body.email} Login unsuccessful`)
    }
  } catch (e) {
    logger.warn(e)
    return next(error(422, 'Unprocessable Entity'))
  } 
})

routes.get('/logout', permission, (req, res, next) => {
  const logger = log('GET /logout')

  logger.info(`Email=${req.session.email} Logout`)

  req.session.destroy(() => {
    res
      .status(204)
      .json()
  })
})

module.exports = routes
