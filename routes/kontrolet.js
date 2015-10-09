var express = require('express');
var router = express.Router();

var dbConn = require('../Baglanti/ConnectMysql');
console.log(dbConn);

router.post('/Kontrolet', function(req, res, next) {

    console.log("geldi1");
    var chunks = "";
    req.on("data", function(chunk) {
        chunks = chunks + chunk;
    });

    req.on("end", function() {
        var post  = JSON.parse(chunks);
        if (post["type"] == "check") {
            if (!req.session.isAdmin) {
                req.session.isAdmin = false;
            }
        }
        //var session_anil = req.session.post = {"deger" :false}
        //console.log(session_anil);
        res.send({"isAdmin": req.session.isAdmin});
    });


});

module.exports = router;

