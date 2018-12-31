module.exports = (req, res, next) => {
  if (req.session.role === 'user') {
    next()
  } else {
    return res
      .status(403)
      .json({
        message: 'Forbidden'
      })
  }
}
