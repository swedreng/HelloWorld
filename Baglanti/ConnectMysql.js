var mysql      = require('mysql');
var dbconnection = mysql.createConnection({
    host     : 'mysql15.000webhost.com',
    user     : 'a7251787_anil',
    password : 'anil1234',
    database : 'a7251787_deneme'
});

module.exports = dbconnection;



