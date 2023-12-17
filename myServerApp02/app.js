var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var data = require('./db-data');
var indexRouter = require("./routes/index");
var newsletterRouter = require("./routes/newsletter");
var lessonDetailRouter = require("./routes/lessonDetail");
var loginRouter = require('./routes/login');
var coursesRouter  = require('./routes/courses')
var lessonsRouter  = require('./routes/lessons')
var app = express();
var router = express.Router();

 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors({origin: true}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})


app.use('/', indexRouter);
app.use('/api', loginRouter);

app.use('/api', coursesRouter);
app.use('/api', lessonsRouter);
app.use("/api", lessonDetailRouter);
app.use("/api", newsletterRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
