var express = require('express');
var router = express.Router();
var dbConn = require('../Baglanti/ConnectMysql');
console.log(dbConn);

router.post('/', function(req, res, next) {
        console.log("geldiii232323");
        var post =  req.body;
        post["Admin_id"] = req.session.isAdminId;
    dbConn.query('INSERT INTO k_info SET ?', post , function(err, result) {
            if(!err) {
                console.log("geldi1111");
                console.log(result);
                res.setHeader('Content-Type','application/json');
                res.json({"Cevap": "succes" });

            }
            else
            {
                res.setHeader('Content-Type','application/json');
                res.json({"Cevap": "error" });

            }
        });
        console.log("geldi2");


});
router.post('/b', function(req, res, next) {
        console.log("geliyorummm");
         var post =  req.body;
        console.log("geldi "+ post["user_id"]);

        //"console.log(post[0]["kullanici_id"].toString());
        var k ="UPDATE k_info SET boy='"+ post["boy"] +"',yas=\""+ post["yas"] +"\",kilo=\""+ post["kilo"]+ "\",belcevresi=\""+ post["belcevresi"]+"\",kolcevresi=\""+ post["kolcevresi"]+ "\",goguscevresi=\""+post["goguscevresi"]+"\",omuzgenisligi=\""+post["omuzgenisligi"]+ "\",k_info.not= \""+post["not"]+"\",Admin_id= \""+req.session.isAdminId+"\" WHERE user_id = "+post["user_id"];
        console.log(k);
        dbConn.query(k,function(err, result) {
            if(!err) {
                console.log("basarilisadasdasd");
                res.setHeader('Content-Type','application/json');
                res.json({"Cevap": "succes" });

            }
            else
            {
                res.setHeader('Content-Type','application/json');
                res.json({"Cevap": "error" });
            }
        });
        console.log("geldi2");



});

router.post('/a', function(req, res, next) {

       var post =  req.body;
        var k = "DELETE  FROM kullanicilar WHERE kullanici_id = " + post["user_id"];
        console.log("q" + k);
         dbConn.query(k, function (err, result) {
            if (!err) {
                console.log("geldi1");
                console.log(result);
                res.setHeader('Content-Type','application/json');
                res.json({"Cevap": "succes" });

            }
            else {
                res.setHeader('Content-Type','application/json');
                res.json({"Cevap": "error" });

            }
        });



});

module.exports = router;


