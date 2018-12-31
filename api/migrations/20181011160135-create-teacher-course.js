'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TeacherCourse', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'Teacher',
          key: 'email'
        }
      },
      courseId: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'Course',
          key: 'courseId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TeacherCourse')
  }
}
