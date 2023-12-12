tutorial: https://www.youtube.com/watch?v=Eu-h3iUk45o


helpful resource: https://www.commandprompt.com/education/how-to-create-a-postgres-database-from-command-line/


https://sequelize.org/docs/v6/other-topics/migrations/

$ npm init -y
$ npm install --save sequelize
$ npm install --save-dev sequelize-cli
$ psql postgres
postgres=# \conninfo
postgres=# CREATE DATABASE sequelize_tutorial;
postgres=# \list
postgres=# \c sequelize_tutorial      // connects to the database sequelize_tutorial

$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
// This will:
Create a model file user in models folder;
Create a migration file with name like XXXXXXXXXXXXXX-create-user.js in migrations folder.
Note: Sequelize will only use Model files, it's the table representation. On the other hand, the migration file is a change in that model or more specifically that table, used by CLI. Treat migrations like a commit or a log for some change in database.

npm run script-name //excecutes scripts in package.json





If you wish to undo the most recent seed:

npx sequelize-cli db:seed:undo

If you wish to undo a specific seed:

npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

If you wish to undo all seeds:

npx sequelize-cli db:seed:undo:all



The purpose of this project is to seed a database with tester data, delete the data and reinstantiate the tables again with a single terminal command as described above. It is a part of a larger project in progress, where I am building a supplimet app which will need full stack functionality. This part of the project handles the database and will be combined with the other project parts to create the full stack web app. The data herein is sample tester data that means nothing and is only for practice and proof of concept so it can be adapted for its true purpose later on. 

the placeholder folder is just that: used to hold the code for the migration and seeder files in case they get deleted.