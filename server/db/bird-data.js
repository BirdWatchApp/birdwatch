const { Pool } = require('pg');
const axios = require('axios');
const { PG_URI } = require('./pg-model');

const apiToken = execSync('echo ${{ secrets.API_KEY }}').toString().trim();

const pool = new Pool({
  connectionString: PG_URI,
});

// INSERT Data
const insertBirdQuery = `
  INSERT INTO birds (speciesCode, comName, locName, obsDt, howMany, lat, lng)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  ON CONFLICT DO NOTHING
  RETURNING _id
`;

const insertBirdgendaQuery = `
  INSERT INTO birdgendas (speciesCode)
  VALUES ($1)
  ON CONFLICT DO NOTHING
  RETURNING _id
`;

(async () => {
  try {
    // Fetch data from the eBird API
    const response = await axios.get('https://api.ebird.org/v2/data/obs/KZ/recent', {
      headers: {
        'X-eBirdApiToken': apiToken,
      },
    });

    const birdData = response.data;

    // Start a PostgreSQL transaction
    const client = await pool.connect();
    await client.query('BEGIN');

    for (const bird of birdData) {
      const { speciesCode, comName, locName, obsDt, howMany, lat, lng } = bird;

      // Insert data into 'birds' table
      await client.query(insertBirdQuery, [speciesCode, comName, locName, new Date(obsDt), howMany, lat, lng]);

      // Insert data into 'birdgendas' table
      await client.query(insertBirdgendaQuery, [speciesCode]);
    }

    // Commit the transaction
    await client.query('COMMIT');
    client.release();

    console.log('Data inserted into the database successfully.');
  } catch (error) {
    console.error('Error:', error);

    // Roll back the transaction if there's an error
    if (client) {
      await client.query('ROLLBACK');
      client.release();
    }
  } finally {
    pool.end();
  }
})();
