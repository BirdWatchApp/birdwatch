const sqlActions = {};


sqlActions.checkPassword = async (username, password) => {
    const query = `
    SELECT id, password FROM users 
    WHERE username = $1;`;
    const result = await pool.query(query, [username]);
    if (password === result.rows[0].password) return result.rows[0].id;
}

sqlActions.addUser = async ( username, password ) => {
    const query = `
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING id;
    `;
    const result = await pool.query(query, [username, password]);
    return result.rows[0];
}

sqlActions.getBirds = async ( params ) => {
    //const {speciesCode, commName, sciName, locId, locName, obsDt, howMany, lat, lng} = req.params;
    const values = [];
    let query = `
    SELECT * from birds
    WHERE `;
    for (const [key,value] of Object.entries(params)){
        if (value){
            query += ` ${key} = $${values.length+1}`;
            values.push(value)
        }
        if (query[query.length-1] !== '&' && values.length) query += ' &';
    }
    query = query.slice(0, -2);
    query += ';';
    const result = await pool.query(query, values);
    return result.rows;
}

module.exports = sqlActions;