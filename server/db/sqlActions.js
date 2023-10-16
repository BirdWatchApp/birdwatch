const sqlActions = {};


sqlActions.checkPassword = async (username, password) => {
    const query = 'SELECT id, password WHERE username = $1';
    const values = [username];
    const result = await pool.query(query, values);
    if (password === result.rows[0].password) return result.rows[0].id;
}

module.exports = sqlActions;