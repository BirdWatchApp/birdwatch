const { Pool } = require('pg');
require('dotenv').config();
const pg_uri = process.env.PG_URI;
const sqlActions = {};
const pool = new Pool({
    connectionString: pg_uri,
})


sqlActions.checkPassword = async (username, password) => {
    const query = `
    SELECT _id, password FROM users 
    WHERE username = $1;
    `;
    const result = await pool.query(query, [username]);
    console.log(result)
    if (password === result.rows[0].password) return result.rows[0]._id;
}

sqlActions.addUser = async ( username, password ) => {
    const query = `
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING _id;
    `;
    const result = await pool.query(query, [username, password]);
    return result.rows[0];
}

sqlActions.getBirds = async ( params ) => {
    // const {species == null, loc ==nul, lat, lng, commName} = params
    const values = [];
    let query = `
    SELECT * from birds
    WHERE `;
    for (const [key,value] of Object.entries(params)){
        if (value){
            if (values.length !== 0){
                query += ' AND '
            }
            query += `${key} = $${values.length+1}`;
            values.push(value)
        }
    }
    query += ';';
    const result = await pool.query(query, values);
    return result.rows;
}

sqlActions.getAllBirds = async () => {
    const query = `SELECT * from birds`;
    const result = await pool.query(query);
    return result.rows;
}

sqlActions.getBirdgenda = async (param) => {
    const {species} = param; 
    const query = `SELECT birdgenda from birdgendas WHERE species = $1`
    const result = await pool.query(query, [species]);
    return result.rows;
}

sqlActions.addBirdgenda = async (params) => {
    const {species, content} = params;
    const query = `INSERT INTO birdgendas (species, birdgenda)
    VALUES ($1, $2)
    RETURNING _id`;
    const result = await pool.query(query, [species, content]);
    return result.rows[0];
}

sqlActions.editBirdgenda = async (params) => {
    const {_id, content} = params;
    const query = `UPDATE birdgendas SET birdgenda = $1 WHERE _id = $2 RETURNING *`;
    const result = await pool.query(query, [content, _id]);
    return result.rows[0];
}

sqlActions.deleteBirdgenda = async (params) => {
    const {_id} = params;
    const query = `DELETE FROM birdgendas WHERE _id = $1 RETURNING *`;
    const result = await pool.query(query, [_id])
    return result.rows[0];
}
module.exports = sqlActions;