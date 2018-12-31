'use strict'
module.exports = (sequelize, DataTypes) => {
  const Participation = sequelize.define('Participation', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    join: DataTypes.BOOLEAN,
  }, {})
  Participation.associate = function(models) {
    models.Participation.belongsTo(models.Student, {
      onDelete: 'CASCADE',
      foreignKey: 'studentId'
    })
  }
  return Participation
}
