const { Router } = require('express')
const { validationResult, body, param } = require('express-validator/check')
const permission = require('../services/permission')
const courseService = require('../services/courseService')
const error = require('../services/error')
const log = require('../log')

const routes = Router()

routes.get('/course', permission, async (req, res, next) => {
  const logger = log('GET /course')

  try {
    const course = await courseService.list(req.session.email)
    const listCourse = courseService.append(course)
    res
      .status(200)
      .json(listCourse)
    logger.info(`Email=${req.session.email} List course`)
  } catch (e) {
    logger.warn(e)
    return next(error(422, 'Unprocessable Entity'))
  }
})

routes.get('/courseall', async (req, res, next) => {
  const logger = log('GET /courseall')

  try {
    const listCourseAll = await courseService.listAll()
    res
      .status(200)
      .json(listCourseAll)
    logger.info(`List course all`)
  } catch (e) {
    logger.warn(e)
    return next(error(422, 'Unprocessable Entity'))
  }
})

routes.post('/course', [
  body('courseId', 'courseId error')
    .not().isEmpty().exists().isLength({ min: 8, max: 8 })
    .trim().escape(),
  body('subject', 'subject error')
    .not().isEmpty().exists()
    .trim().escape()
], permission, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() })
  }

  const logger = log('POST /course')

  try {
    const course = await courseService.create(req.session.email, req.body)
    res
      .status(201)
      .json({
        message: 'Created'
      })
    logger.info(`Email=${req.session.email} Create course=${course.courseId}`)
  } catch (e) {
    logger.warn(e)
    return next(error(422, 'Unprocessable Entity'))
  }
})

routes.delete('/course/:courseId', [
  param('courseId', 'courseId error')
    .not().isEmpty().exists().isLength({ min: 8, max: 8 })
    .trim().escape()
], permission, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() })
  }

  const logger = log(`DELETE /course/${req.params.courseId}`)

  try {
    const course = await courseService.delete(req.params.courseId)
    res
      .status(204)
      .json()
    logger.info(`Email=${req.session.email} Delete course=${req.params.courseId}`)
  } catch (e) {
    logger.warn(e)
    return next(error(422, 'Unprocessable Entity'))
  }
})

routes.post('/course/repeat', [
  body('courseId', 'courseId error')
    .not().isEmpty().exists().isLength({ min: 8, max: 8 })
    .trim().escape()
], permission, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() })
  }

  const logger = log('POST /course/repeat')

  try {
    const isDuplicate = await courseService.checkDuplicate(req.session.email, req.body.courseId)
    if (isDuplicate) {
      const course = await courseService.createDuplicate(req.session.email, req.body.courseId)
      res
        .status(201)
        .json({
          message: 'Created'
        })
      logger.info(`Email=${req.session.email} Create repeat course=${course.courseId}`)
    } else {
      res
        .status(422)
        .json({
          message: 'Unprocessable Entity'
        })
      logger.warn(`Email=${req.session.email} Can't create repeat course`)
    }
  } catch (e) {
    logger.warn(e)
    return next(error(422, 'Unprocessable Entity'))
  }
})

module.exports = routes
