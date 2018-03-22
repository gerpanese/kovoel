const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const session = require('express-session');
const passport = require('passport');
const db = require('./db');
const googleLoginStrategy = require('./passport/googleLogin');
const localLoginStrategy = require('./passport/localLogin');

const app = express();

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

console.log(111);
// app.use(express.static(path.join(__dirname, '../public')));

// Load passport strategy
passport.use(localLoginStrategy);

// Use the GoogleStrategy within Passport
passport.use(googleLoginStrategy);
console.log(222);
passport.serializeUser((user, done) => {
  console.log('serializeUser', user);
  done(null, user[0].id);
});

passport.deserializeUser((id, done) => {
  db
  .users
  .findById(id)
  .then(user => done(null, user))
  .catch(err => done(err));
});
console.log(333);
app.use(session({
  secret: 'kovoel',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());
console.log(4444);
app.use('*', (request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
  next();
});

console.log(55);
app.use('/api', [
  router.flashcardRouter,
]);

app.use('/auth', [
  router.localLogin,
  router.register,
  router.googleLogin,
]);

console.log(666);

app.use(express.static(path.join(__dirname, 'public')));
// catch 404 and forward to error handler
app.use((request, response, next) => {
  console.log(777, request, response);
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use((error, request, response) => {
  // set locals, only providing error in development
  response.locals.message = error.message;
  response.locals.error = request.app.get('env') === 'development' ? error : {};

  // render the error page
  response.status(error.status || 500);
  response.render('error');
});

module.exports = app;
