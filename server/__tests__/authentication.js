const PORT = process.env.PORT || 4000;
const app = require('../app.js');
const config = require('./config');
const knex = require('knex')(config.db);
const chai = require('chai');
const chaiHttp = require('chai-http');
const chalk = require('chalk');
const should = chai.should();

app.listen(PORT, () => console.log(
  chalk.yellow.bold('Test server listening on port: ')
  + chalk.cyan.bold(PORT)
));

chai.use(chaiHttp);

describe('GET /register', () => {
  let status, response;

  before(done => {
    chai.request(app)
      .get('/register')
      .set(
        'Content-Type', 'application/json'
      )
      .end((error, res) => {
        status = res.status;
        response = res.text;
        done();
      });
  });

  it('should return status 200.', done => {
    status.should.equal(200);
    done();
  });

  it('should give a message.', done => {
    response.should.be.a('string');
    response.should.deep.equal('Register page!');
    done();
  });
});

describe('POST /register', () => {
  let status, response;

  before(done => {
    chai.request(app)
      .post('/register')
      .set(
        'Content-Type', 'application/json'
      )
      .send({ 
        name: 'Captain Krystal',
        email: 'captainkrystal@gmail.com',
        password: 'hitoomedia'
       })
      .end((error, res) => {
        status = res.status;
        if (error) {
          done(error);
        } else {
          done();
        }
      });
  });

  it('should return status 200.', done => {
    status.should.equal(200);
    done();
  });

});

describe('GET /login', () => {
  let status, response;

  before(done => {
    chai.request(app)
      .get('/login')
      .set(
        'Content-Type', 'application/json'
      )
      .end((error, res) => {
        status = res.status;
        response = res.text;
        done();
      });
  });

  it('should return status 200.', done => {
    status.should.equal(200);
    done();
  });

  it('should give a message.', done => {
    response.should.be.a('string');
    response.should.deep.equal('Login page!');
    done();
  });
});

describe('POST /login', () => {
  let status, response;

  before(done => {
    chai.request(app)
      .post('/login')
      .set(
        'Content-Type', 'application/json'
      )
      .send({ 
        account: 'captainkrystal@gmail.com',
        password: 'hitoomedia'
       })
      .end((error, res) => {
        status = res.status;
        if (error) {
          done(error);
        } else {
          done();
        }
      });
  });

  after(() => knex('users').del());

  it('should return status 200.', done => {
    status.should.equal(200);
    done();
  });

});