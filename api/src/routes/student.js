const { Router } = require('express')
const { validationResult, body, param, query } = require('express-validator/check')
const studentService = require('../services/studentService')
const permission = require('../services/permission')
const error = require('../services/error')
const log = require('../log')

const routes = Router()

routes.get('/student/:courseId', [
  param('courseId', 'courseId error')
    .not().isEmpty().exists().isLength({ min: 8, max: 8 })
    .trim().escape()
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() })
  }
  const logger = log(`GET /student/${req.params.courseId}`)

  try {
    const student = await studentService.list(req.params.courseId)
    res
      .status(200)
      .json(student)
    logger.info(`Email=${req.session.email} List all student in course=${req.params.courseId}`)
  } catch (e) {
    logger.warn(e)
    return next(error(422, 'Unprocessable Entity'))
  }
})

routes.post('/student/:courseId', [
  body().isArray(),
  body('*.studentId', 'studentId error')
    .not().isEmpty().exists().isLength({ min: 8, max: 8 })
    .trim().escape(),
  body('*.firstname', 'firstname error')
    .not().isEmpty().exists()
    .trim().escape(),
  body('*.lastname', 'lastname error')
    .not().isEmpty().exists()
    .trim().escape(),
  param('courseId', 'courseId error')
    .not().isEmpty().exists().isLength({ min: 8, max: 8 })
    .trim().escape()
], permission, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() })
  }

  const logger = log(`POST /student/${req.params.courseId}`)

  try {
    await studentService.create(req.body, req.params.courseId)
    res
      .status(201)
      .json({
        message: 'Created'
      })
    logger.info(`Email=${req.session.email} Add student into course=${req.params.courseId}`)
  } catch (e) {
    logger.warn(e)
    return next(error(422, 'Unprocessable Entity'))
  }
})

routes.delete('/student', [
  query('studentId', 'studentId error')
    .not().isEmpty().exists().isLength({ min: 8, max: 8 })
    .trim().escape(),
  query('courseId', 'courseId error')
    .not().isEmpty().exists().isLength({ min: 8, max: 8 })
    .trim().escape()
], permission, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() })
  }

  const logger = log('DELETE /student')

  try {
    await studentService.delete(req.query.studentId, req.query.courseId)
    res
      .status(204)
      .json()
    logger.info(`Email=${req.session.email} Delete student=${req.query.studentId} in course=${req.params.courseId}`)
  } catch (e) {
    logger.warn(e)
    return next(error(422, 'Unprocessable Entity'))
  }
})

module.exports = routes
