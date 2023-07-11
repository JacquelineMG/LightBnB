require('dotenv').config();

const { Pool } = require('pg');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME 
};

const pool = new Pool(config);

pool.connect();

module.exports = pool;