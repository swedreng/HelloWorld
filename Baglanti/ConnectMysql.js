var mysql      = require('mysql');
var dbconnection = mysql.createConnection({
    host     : '5.101.106.146',
    user     : 'ayberk2',
    password : '393939',
    database : 'deneme'
});

module.exports = dbconnection;



