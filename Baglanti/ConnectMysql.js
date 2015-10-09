var mysql      = require('mysql');
var dbconnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'deneme'
});

module.exports = dbconnection;