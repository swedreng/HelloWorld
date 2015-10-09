var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {

    res.render('giris', {title: 'Express'});
});
router.get('/cikisyap', function (req, res, next) {
    req.session.isAdmin = false;
    req.session.isKullanici = false;
    res.render('giris', {title: 'Express'});
});
router.get('/admin', function (req, res, next) {
    res.setHeader('Cache-Control', 'private, max-age=0, no-cache, no-store');
    console.log("isadmin : " + req.session.isAdmin);
    if (req.session.isAdmin == true) {
        res.render('admin', {title: 'Express'});
    } else {
        res.render('giris', {title: 'Express'});
    }

});
router.get('/uyeol', function (req, res, next) {

    res.render('uyeol', {title: 'Express'});

});
router.get('/kullanici', function (req, res, next) {
    if (req.session.isKullanici == true) {
        res.render('kullanici', {title: 'Express'});
    } else {
        res.render('giris', {title: 'Express'});
    }

});

router.get('/closeWindow', function (req, res, next) {

    req.session.destroy();


    res.render('/', {title: 'Express'});

});


module.exports = router;
