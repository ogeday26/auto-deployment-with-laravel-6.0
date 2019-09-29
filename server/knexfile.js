module.exports = {
  // development: {
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_HOST || 'localhost',
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'ogeday26',
    database: process.env.POSTGRES_DATABASE || 'postgres'
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/database/migrations`
  },
  seeds: {
    directory: `${__dirname}/database/seeds`
  }
  // }
  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: process.env.POSTGRES_DATABASE,
  //     user: process.env.POSTGRES_USER,
  //     password: process.env.POSTGRES_PASSWORD
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: process.env.POSTGRES_DATABASE,
  //     user: process.env.POSTGRES_USER,
  //     password: process.env.POSTGRES_PASSWORD
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
};
