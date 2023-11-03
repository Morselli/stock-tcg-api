'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.removeColumn('collections', 'cards_number')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('collections')
  }
};
