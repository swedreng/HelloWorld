var express = require('express');
var router = express.Router();
var dbConn = require('../Baglanti/ConnectMysql');




router.post('/', function(req, res) {

    console.log("asdasd");
    var post =  req.body;


        dbConn.query('SELECT * FROM k_mesaj WHERE user_id = \"' + post["user_id"] + '\" && Admin_id = \"'+ req.session.isAdminId + '\"' , function (err, result) {
        if (!err) {
            if (result.length != 0) {

                console.log(result);

                res.setHeader('Content-Type','application/json');
                res.json({"Cevap":result});


            } else {
                res.setHeader('Content-Type','application/json');
                res.json({"Cevap":result});
            }

        }

    });


});

module.exports = router;
