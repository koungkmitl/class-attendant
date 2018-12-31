const models = require('../../models')

module.exports = {
  async joinInTime(studentId, courseId) {
    const student = await this.findStudentId(studentId, courseId)

    return await models.Participation.create({
      join: true,
      studentId: student.id
    })
  },
  async findStudentId(studentId, courseId) {
    return await models.Student.findOne({
      where: {
        studentId,
        courseId
      }
    })
  },
  async listParticipation(courseId) {
    return await models.Participation.findAll({
      include: {
        model: models.Student,
        where: {
          courseId
        }
      }
    })
  },
  formatData(data) {
    const information = {}

    data.forEach(element => {
      if (element.Student.studentId in information) {
        information[element.Student.studentId]++
      } else {
        information[element.Student.studentId] = 1
      }
    })
    return information
  }
}