'use strict'
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    courseId: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    subject: DataTypes.STRING,
  }, {})
  Course.associate = function(models) {
    models.Course.belongsTo(models.TeacherCourse, {
      onDelete: 'CASCADE',
      foreignKey: 'courseId'
    })
    models.Course.hasMany(models.Student, {
      onDelete: 'CASCADE',
      foreignKey: 'courseId'
    })
  }
  return Course
}
