const { Router } = require('express')
const { validationResult, body, param } = require('express-validator/check')
const participationService = require('../services/participationService')
const permission = require('../services/permission')
const error = require('../services/error')
const log = require('../log')

const routes = Router()

routes.get('/participation/:courseId', [
  param('courseId', 'courseId error')
    .not().isEmpty().exists().isLength({ min: 8, max: 8 })
    .trim().escape(),
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() })
  }

  const logger = log('GET /participation')

  try {
    const information = await participationService.listParticipation(req.params.courseId)

    if (information.length === 0) {
      res
        .status(200)
        .json([ ])
      logger.info(`Email=${req.session.email} List student participation`)
    } else {
      const participation = participationService.formatData(information)
      res
        .status(200)
        .json(
          participation
        )
      logger.info(`Email=${req.session.email} List student participation`)
    }
  } catch (e) {
    logger.warn(e)
    return next(error(422, 'Unprocessable Entity'))
  }
})

routes.post('/participation', [
  body('studentId', 'studentId error')
    .not().isEmpty().exists().isLength({ min: 8, max: 8 })
    .trim().escape(),
  body('courseId', 'courseId error')
    .not().isEmpty().exists()
    .trim().escape()
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ message: errors.array() })
  }

  const logger = log('POST /participation')

  try {
    await participationService.joinInTime(req.body.studentId, req.body.courseId)
    res
      .status(201)
      .json({
        message: 'Created'
      })
    logger.info(`Student=${req.body.studentId} Are present`)
  } catch (e) {
    logger.warn(e)
    return next(error(422, 'Unprocessable Entity'))
  }
})

module.exports = routes
