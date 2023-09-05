require('dotenv').config();

module.exports ={
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST || 'postgres',
    dialect: process.env.DATABASE_DIALECT || 'postgres'
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST || 'postgres',
    dialect: process.env.DATABASE_DIALECT || 'postgres'
  },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.DATABASE_URL,
    host: process.env.PGHOST || 'postgres',
    dialect: process.env.DATABASE_DIALECT || 'postgres'
  }
}
