'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Submissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      ChallengeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Challenges',
          key: 'id'
        },
      },
      url: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      getReward: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      statusSubmission: {
        type: Sequelize.STRING,
        defaultValue: "wait",
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
    await queryInterface.dropTable('Submissions');
  }
};