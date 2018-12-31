'use strict'
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    studentId: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
  }, {})
  Student.associate = function(models) {
    models.Student.belongsTo(models.Course, {
      onDelete: 'CASCADE',
      foreignKey: 'courseId'
    })
    models.Student.hasMany(models.Participation, {
      onDelete: 'CASCADE',
      foreignKey: 'studentId'
    })
  }
  return Student
}
