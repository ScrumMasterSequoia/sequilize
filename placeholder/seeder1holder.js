



// below is the seeder file from the tutorial 

// awaits a promise and we dont care about trowing exceptions because its just seed data

'use strict';

const { ENUM } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'user',
      [
        {
          id: 1,
          first_name: 'John',
          last_name: 'Smith',
          email: 'johnsmith@test.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          first_name: 'Riley',
          last_name: 'Flanigan',
          email: 'rileyflanigan@test.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          first_name: 'Betty',
          last_name: 'Johnson',
          email: 'bettyjohnson@test.com',
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      {} // options
    );
    await queryInterface.bulkInsert(
      'data_types',
      [
        {
          id: 1,
          string_type: 'hello world',
          date_type: new Date(),
          float_type: 1.5,
          boolean_type: true,
          time_type: '12:00:00',
          //enum_type: ENUM('x', 'y', 'z'),
          money_type: 100.00,
          serial_type: 1436474858363524
                       
                       
          // path_type: /home/sally/statusReport
        },
        {
          id: 2,
          string_type: 'hello Mars',
          date_type: new Date(),
          float_type: 6.344,
          boolean_type: false,
          time_type: '07:35:07',
          //enum_type: ENUM('a', 'b', 'c'),
          money_type: 765498.87,
          serial_type: 7362983543209134
          // path_type: /home/sally/statusReport
        },
        {
          id: 3,
          string_type: 'hello venus',
          date_type: new Date(),
          float_type: 1.5,
          boolean_type: true,
          time_type: '04:16:58',
          //enum_type: ENUM(1, 2, 3),
          money_type: 165287.65,
          serial_type: 7456293502986298
          // path_type: /home/sally/statusReport
        }
      ],
      {} // options can add bulkDeleteOptions back to the down function as the third parameter if options are set here
    );


  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('data_types', null);
    await queryInterface.bulkDelete('user', null);
  },
};