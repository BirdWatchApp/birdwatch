const { Pool } = require('pg');

//TODO: Move to .env
const PG_URI = 'postgres://invekffh:8IiPK26Pl3_MiBQqYZd0d6dbPQzXU6Yo@suleiman.db.elephantsql.com/invekffh'

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
  PG_URI: PG_URI,
};
