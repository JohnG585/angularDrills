dropdb angular-http-drill
dropdb angular-http-drill-test
createdb angular-http-drill
createdb angular-http-drill-test
knex migrate:latest --knexfile app/knexfile.js
knex migrate:latest --env test --knexfile app/knexfile.js
