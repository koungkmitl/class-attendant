'use strict'
module.exports = (sequelize, DataTypes) => {
  const TeacherCourse = sequelize.define('TeacherCourse', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {})
  TeacherCourse.associate = function(models) {
    models.TeacherCourse.belongsTo(models.Teacher, {
      onDelete: 'CASCADE',
      foreignKey: 'email'
    })
    models.TeacherCourse.belongsTo(models.Course, {
      onDelete: 'CASCADE',
      foreignKey: 'courseId'
    })
  }
  return TeacherCourse
}