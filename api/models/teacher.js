'use strict'
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    email: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
  }, {})
  Teacher.associate = function(models) {
    models.Teacher.hasMany(models.TeacherCourse, {
      onDelete: 'CASCADE',
      foreignKey: 'email'
    })
  }
  return Teacher
}
