'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SubmissionStats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      view: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      like: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      SubmissionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Submissions',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SubmissionStats');
  }
};