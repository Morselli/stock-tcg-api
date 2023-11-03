'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cards', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      card_numeration: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rarity: {
        type: Sequelize.ENUM([
          'COMMON',
          'UNCOMMON',
          'RARE',
          'DOUBLE RARE',
          'ULTRA RARE',
          'ILLUSTRATION RARE',
          'SPECIAL ILLUSTRATION RARE'
        ]),
        allowNull: false
      },
      condition: {
        type: Sequelize.ENUM([
          'NM',
          'SP',
          'MP',
          'HP',
          'DM'
        ]),
        allowNull: false
      },
      lowest_value_liga: {
        type: Sequelize.INTEGER
      },
      lowest_value_myp: {
        type: Sequelize.INTEGER
      },
      advertised_value: {
        type: Sequelize.INTEGER
      },
      collection_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'collections',
          key: 'id'
        }
      },
      card_game_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'card_games',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cards')
  }
};
