# RESTful Web Service for Event Check-in Application

Exposes RESTful APIs for all admin page, welcomer application and guest starter application.

---
## SETUP DATABASE

- `knex migrate:latest` to create tables for development.
- `knex seed:run` to insert seed data.

- `knex migrate:latest -env testing` to create tables for unit testing.

To re-run migration, go to database then delete all rows in table `knex_migrations.`

## INSTALLATION

`npm i`: To install dependencies.

## TEST

- Execute `npm start` to start web server.
- Send a GET request to `http://localhost:3000/` to check if it works.

## DEVELOPMENT

- `npm run build` to transpile TypeScript then run unit tests (if any) (equiv. `npm run compile` + `npm run test` (if any)).
- `npm run compile`: To transpile TypeScript into JavaScript.
- `npm run watch`: To transpile without running unit tests, then watch for changes in *.ts files and re-transpile on save.
- `npm run test`: To run unit tests.
  * After tests finish, open file `/coverage/index.html` with a web browser to see the code coverage report which is mapped to TypeScript code.

## RELEASE

- Jump to script folder: `cd ./docker`
- Create Docker image: `sudo sh ./create-image.sh`
- Deploy services to Docker swarm: `sudo sh ./deploy.sh`
- Remove services from Docker swarm: `sudo sh ./undeploy.sh`