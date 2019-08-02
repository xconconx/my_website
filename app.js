require('dotenv').config();

const createError = require('http-errors'),
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    mongoose = require('mongoose');

const indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users');
    orderRouter = require('./routes/posts');

//Start express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Start mongoose and make sure database is connected */
const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
  process.env.DB_HOST}
/my_website`;
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("Connection successful"))
  .catch(err => console.log(err));

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

/* App should take us to home */ 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/order', orderRouter);

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
