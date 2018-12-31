const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf } = format

const myFormat = printf(info => {
  return `${info.timestamp} [${info.label}] [${info.level}]: ${info.message}`
})

module.exports = (path) => createLogger({
  format: combine(
    label({ label: path }),
    timestamp(),
    myFormat
  ),
  transports: [new transports.Console()]
})
