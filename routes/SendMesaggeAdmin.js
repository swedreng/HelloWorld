var express = require('express');
var router = express.Router();
var dbConn = require('../Baglanti/ConnectMysql');

router.post('/', function(req, res) {


    var post =  req.body;
    post["user_id"] = req.session.isKid;

    dbConn.query('INSERT INTO k_mesaj SET ?', post , function(err, result) {
        if (!err) {
            if (result.length != 0) {


                res.setHeader('Content-Type','application/json');
                res.json({"Cevap":"success"});


            } else {


                res.setHeader('Content-Type','application/json');
                res.json({"Cevap":"error"});
            }

        }

    });


});

module.exports = router;
