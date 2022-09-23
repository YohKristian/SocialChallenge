'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let rewards = require('../data/reward.json');
    rewards.forEach(x => {
      x.createdAt = new Date();
      x.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Rewards", rewards, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rewards", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
