var express = require('express');
var router = express.Router();
var dbConn = require('../Baglanti/ConnectMysql');
console.log(dbConn);


router.post('/', function(req, res, next) {
    console.log("geldiiii");
     var post =  req.body;


    dbConn.query('SELECT * FROM k_info WHERE user_id = ' + post["kullanici_id"] + ' '  , function (err, result) {
            if(!err){
                if(result.length != 0){
                console.log(result);
                    res.setHeader('Content-Type','application/json');
                    res.json({"Cevap": result });
                }
                else
                {
                    res.setHeader('Content-Type','application/json');
                    res.json({"Cevap":"yok"});
                    console.log("yok");
                }

            }else{

                res.header('Access-Control-Allow-Origin', '*');
                res.end("error");
                console.log("error");


            }

        });

    });





module.exports = router;

