require('dotenv').config();
const { Pool } = require('pg');

const dbURI = process.env.PG_URI;

const pool = new Pool({
  connectionString: dbURI,
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
