var createError = require('http-errors');
var express = require('express');
var router = express();
var path = require('path');
// var cookieParser = require('cookie-parser');

/*
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/myinfo');
var boardsRouter = require('./routes/board');
var companyRouter = require('./routes/company');
*/
// view engine setup
router.set('views', path.join(__dirname, 'views'));
// remove Pug
// app.set('view engine', 'pug');
router.get('/', function (req, res) {
  
  res.status(err.status || 500)
  res.send({ 'error': 'no route found!' });

});


/*
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
*/
// app.use('/', indexRouter);
/*
app.use('/myinfo', usersRouter);
app.use('/board', boardsRouter);
app.use('/company', companyRouter);
*/
// catch 404 and forward to error handler
/*
app.use(function(req, res, next) {
  next(createError(404));
});
*/

// error handler
/*
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/
module.exports = router;
