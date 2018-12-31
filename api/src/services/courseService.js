const models = require('../../models')

module.exports = {
  async list(email) {
    return await models.TeacherCourse.findAll({
      where: {
        email
      },
      attributes: [ 'email' ],
      include: [
        {
          model: models.Course,
          attributes: [ 'courseId', 'subject' ]
        }
      ]
    })
  },
  async create(email, information) {
    return await models.sequelize.transaction(t => {
      return models.Course.create(information, { transaction: t })
        .then(course => {
          return models.TeacherCourse.create({
            email: email,
            courseId: course.courseId
          }, { transaction: t })
        })
    })
  },
  async delete(courseId) {
    return await models.Course.destroy({
      where: {
        courseId
      }
    })
  },
  append(course) {
    const listCourse = []

    course.forEach(element => {
      const { subject, courseId } = element.Course
      listCourse.push({
        subject,
        courseId
      })
    })
    return listCourse
  },
  async checkDuplicate(email, courseId) {
    const listEmail = []

    const duplicate = await models.TeacherCourse.findAll({
      where: {
        courseId
      }
    })

    if (duplicate.length === 0) {
      return false
    }

    duplicate.forEach(element => {
      listEmail.push(element.email)
    })
    if (listEmail.includes(email)) {
      return false
    } else {
      return true
    }
  },
  async createDuplicate(email, courseId) {
    return await models.TeacherCourse.create({
      email,
      courseId
    })
  },
  async listAll() {
    return await models.Course.findAll({
      attributes: [ 'courseId', 'subject' ]
    })
  }
}
