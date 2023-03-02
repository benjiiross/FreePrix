<!-- md about a project of a friperie, online thrift store made in vuejs and mysql -->

# FreePrix

## About

FreePrix is a project of a friperie, online thrift store made in vuejs and mysql.
We worked no this project for 2 weeks, it is a school project.
I worked with 2 other students, [Julie](
  https://github.com/juliele1
) and [Jules](
    https://github.com/juliogver
).

## Installation

### Requirements

- nodejs >= 14.15.0

- mysql >= 8.0.23

- npm >= 6.14.8

### Instructions
<!-- instructions -->
1. cp api/app/config/db.config-example.js api/app/config/db.config.js

1. Change your credentials

1. In mysql, create the db `freeprix`:

```sql
   CREATE DATABASE IF NOT EXISTS freeprix;
```

4. cd api; npm i; npm run dev

1. launch the ./articles.sql script to seed the db

1. In a new terminal, cd site; npm i; npm run dev

1. Connect to `localhost:5173` (vite address) or `127.0.0.1:5173`
