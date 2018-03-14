const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const passport = require("passport");
const { Strategy } = require("passport-local");
const session = require("express-session");
const index = require('./routes/index');
const db = require('./db');
const app = express();

passport.use(
  new Strategy(async (account, password, done) => {
    try {
      const user = await db.users.findByAccount(account);
      if (!user) {
        return done(null, false, , { message: 'Incorrect account.'});
      }

      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) {
        return done(null, false, { message: 'Incorrect password.'});
      }
  
      done(null, user);
    } catch (error) {
      done(error);
    }
  })
)

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db
    .users
    .findById(id)
    .then(user => done(null, user))
    .catch(err => done(err));
});

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', index);
app.use(express.static(path.join(__dirname, '../public')));

app.use(
  session({
    secret: "kovoel",
    resave: false,
    saveUninitialized: false
  })
);
// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

app.post("/register", async (req, res) => {
  const newUser = req.body;
  newUser.password = await bcrypt.hash(newUser.password, 10);
  await db.users.addUser(newUser);
  res.status(200).end();
});

// catch 404 and forward to error handler
app.use((request, response, next) => {
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
