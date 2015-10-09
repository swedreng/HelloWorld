var express = require('express');
var router = express.Router();
var dbConn = require('../Baglanti/ConnectMysql');



router.post('/', function(req, res) {

    console.log("Merhaba");
    var post =  req.body;

        console.log(post["username"]);
        console.log(post["password"]);
    dbConn.query('SELECT * FROM kullanicilar WHERE username = \"' + post["username"] + '\" && password = \"'+ post["password"] + '\"' , function (err, result) {
                if (!err) {
                    req.session.isAdmin = false;
                    req.session.isKullanici = false;

                if (result.length != 0) {
                    console.log(result);
                    if(result[0].kullanici_rutbe == "1"){

                        req.session.isAdmin = true;
                        var admin = true;
                        req.session.isAdminId = result[0].kullanici_id;
                        res.setHeader('Content-Type','application/json');

                        res.json({"Admin": admin});
                    }
                    else{

                        res.setHeader('Content-Type','application/json');
                        req.session.isAdmin = false;
                        req.session.isKullanici = true;
                        var admin = false;
                        req.session.isKid  = result[0].kullanici_id;

                        res.json({"Admin":admin});
                    }

                } else {
                    res.setHeader('Content-Type','application/json');
                    res.json({"Cevap":"error"});
                }

            }

    });


});

module.exports = router;



