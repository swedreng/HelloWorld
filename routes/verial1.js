var express = require('express');
var router = express.Router();
var dbConn = require('../Baglanti/ConnectMysql');


router.get('/', function(req,res, next) {
    console.log("gelmiss");
    dbConn.query('SELECT username,surname,kullanici_id FROM kullanicilar' , function (err, result){
        if (!err) {
           console.log("verigeldi");
            console.log(result);
            res.setHeader('Content-Type','application/json');
            res.json({"Cevap":  result });


        } else {
            console.log("geldi32");
            res.setHeader('Content-Type','application/json');
            res.json({"Cevap":"error"});
        }
    });



});

module.exports = router;


