'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_table', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


    await queryInterface.createTable('data_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      string_type: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      date_type: {
        allowNull: false,
        type: Sequelize.DATE
      },
      float_type: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      boolean_type: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      
      time_type: {
        allowNull: false,
        type: Sequelize.TIME
      },
      // enum_type: {
      //   allowNull: false,
      //   type: Sequelize.ENUM('value1', 'value2', 'value3')
      // },
      money_type: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      // path_type: {
      //   allowNull: false,
      //   type: Sequelize.JSON
      // },
      serial_type: {
        allowNull: false,
        type: Sequelize.BIGINT
      }
    });


  },
  async down(queryInterface) {
    // await queryInterface.dropTable('Users');
    await queryInterface.dropAllTables(); // only works for first migration
  }
};

// replaced createdAt and updatedAt with created_at and updated_at because camel case breaks some machines