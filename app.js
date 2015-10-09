var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var girisyap = require('./routes/girisyap');
var kontrolet = require('./routes/kontrolet');
var newuser = require('./routes/newuser');
var uye_kayit = require('./routes/uye_kayit');
var verial1 = require('./routes/verial1');
var verial2 = require('./routes/verial2');
var UyemesajSil = require('./routes/UyemesajSil');
var SendMesaggeAdmin = require('./routes/SendMesaggeAdmin');
var verikontrol = require('./routes/verikontrol');
var Uyemesaj = require('./routes/Uyemesaj');
var users = require('./routes/users');


var app = express();

var session = require('express-session');

app.use(session({
  secret: 'keyboard cat',
  unset: 'destroy',
  name: 'sessid',
  rolling: true,
  secure: true
}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',index);
app.use('/closeWindow',index);
app.use('/cikisyap',index);
app.use('/UyemesajSil',UyemesajSil);
app.use('/Uyemesaj',Uyemesaj);
app.use('/SendMesaggeAdmin',SendMesaggeAdmin);
app.use('/kullanici',index);
app.use('/GirisYap',girisyap);
app.use('/newuser',newuser);
app.use('/UyeKayit',uye_kayit);
app.use('/UyeGuncelle',uye_kayit);
app.use('/UyeSil',uye_kayit);
app.use('/Verial1',verial1);
app.use('/Verial2',verial2);
app.use('/Verikontrol',verikontrol);
app.use('/Kontrolet',kontrolet);
app.use('/admin',index);









// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
