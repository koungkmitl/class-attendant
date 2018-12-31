const models = require('../../models')

module.exports = {
  async create(students, courseId) {
    students.forEach(element => {
      element.courseId = courseId
    })
    return await models.Student.bulkCreate(students)
  },
  async list(courseId) {
    return await models.Student.findAll({
      where: {
        courseId: courseId
      },
      attributes: ['studentId', 'firstname', 'lastname']
    })
  },
  async delete(studentId, courseId) {
    return await models.Student.destroy({
      where: {
        studentId,
        courseId
      }
    })
  }
}