var express = require('express');
var router = express.Router();
var dbConn = require('../Baglanti/ConnectMysql');
console.log(dbConn);

router.post('/', function(req, res, next) {

    console.log("Merhaba");
    var post =  req.body;


        console.log("geldi "+ post);
         dbConn.query('INSERT INTO kullanicilar SET?',post, function(err, result) {
            if(!err) {
                console.log("geldi1");
                console.log(result);
                res.setHeader('Content-Type','application/json');
                res.json({"Cevap":"succes"});

            }
            else
            {
                console.log(err);
                res.json({"Cevap":"error"});

            }
        });
        console.log("geldi2");
    });





module.exports = router;


