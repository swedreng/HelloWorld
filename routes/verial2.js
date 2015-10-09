var express = require('express');
var router = express.Router();

var dbConn = require('../Baglanti/ConnectMysql');
console.log(dbConn);

router.post('/', function(req, res, next) {
    console.log("sadasdsad");
    var post =  req.body;
    console.log(post["user_id"]);
        var k = "SELECT * FROM k_info as k join kullanicilar as kl on k.user_id = kl.kullanici_id where user_id = " + req.session.isKid;
        console.log(post+"sdsadsa");

     dbConn.query(k ,function(err, result) {
         console.log(result);
            if(!err) {
                console.log("geldi");
                if(result.length != 0){

                    res.setHeader('Content-Type','application/json');
                    console.log(result);
                    res.json({"Cevap":result});

                }
                else
                {
                    res.setHeader('Content-Type','application/json');
                    res.json({"Cevap":"error"});

                }

            }
            else
            {
                console.log(err);
                res.end("yok");

            }
        });
        console.log("geldi2");



});

module.exports = router;

