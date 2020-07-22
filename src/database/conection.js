const mysql = require('mysql')

module.exports = () => {
    return mysql.createConnection({
        host:  'localhost', 
        user:  process.env.MYSQL_USER, //<--- Your user
        password:  process.env.MYSQL_PASSWORD, // <--- Your password
        database:  'social'
    });
}