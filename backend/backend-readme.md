#  Getting Started

## Install Knex:
* Run command: `npm install knex -g`

## Install PostgresSQL:
* Follow official postgres download - [https://www.postgresql.org/download/](https://www.postgresql.org/download/) 

## Create Database:
* Using psql in the terminal
* Or use preferred Postgres GUI (ex. pgAdmin)

## Create and fill .env file in backend/ directory:

#### Example
```
    CONNECTION_STRING_DEVELOPMENT=postgres://myuser:mypass@localhost:port/database_name
    PORT=4000
    NODE_ENV=development
```
* CONNECTION_STRING_DEVELOPMENT
  * Replace "myuser" with database username
  * Replace "mypass" with database password
  * Replace "port" with database port
  * Replace "database_name" with database name

## Create Database Tables
* Run comand: `knex migrate:latest`

## Populate Data
* Run comand: `knex seed:run`

## Run server
* Run comand: `npm run serve`
