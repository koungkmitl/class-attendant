const models = require('../../models')
const bcrypt = require('bcryptjs')

module.exports = {
  async create(credential) {
    credential.password = await this.hash(credential.password)
    return models.Teacher.create(credential)
  },
  hash(password) {
    return bcrypt.hash(password, 10)
  },
  async checkLogin(login) {
    const dbPassword = await models.Teacher.findOne({
      where: {
        email: login.email
      }
    })
    return bcrypt.compare(login.password, dbPassword.password)
  }
}