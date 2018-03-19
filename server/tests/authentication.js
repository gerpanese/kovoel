const PORT = process.env.PORT || 4000;
const app = require('../app.js');

const config = require('../db/knexfile.js');
const environment = process.env.NODE_ENV || 'development';
const dbConfig = config[environment];
const knex = require('knex')(dbConfig);

const chai = require('chai');
const chaiHttp = require('chai-http');
const chalk = require('chalk');
const should = chai.should();

app.listen(PORT, () => console.log(
  chalk.yellow.bold('Test server listening on port: ')
  + chalk.cyan.bold(PORT)
));

chai.use(chaiHttp);

describe('GET auth/register', () => {
  let status, message;

  before(done => {
    chai.request(app)
      .get('/auth/register')
      .set(
        'Content-Type', 'application/json'
      )
      .end((error, response) => {
        status = response.status;
        message = response.text;
        done();
      });
  });

  it('should return status 200.', done => {
    status.should.equal(200);
    done();
  });

  it('should give a message.', done => {
    message.should.be.a('string');
    message.should.deep.equal('Register page!');
    done();
  });
});

describe('POST auth/register', () => {
  let status;

  before(done => {
    chai.request(app)
      .post('/auth/register')
      .set(
        'Content-Type', 'application/json'
      )
      .send({ 
        name: 'Captain Krystal',
        email: 'captainkrystal@gmail.com',
        password: 'hitoomedia'
       })
      .end((error, response) => {
        status = response.status;
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

describe('GET auth/login', () => {
  let status, message;

  before(done => {
    chai.request(app)
      .get('/auth/login')
      .set(
        'Content-Type', 'application/json'
      )
      .end((error, response) => {
        status = response.status;
        message = response.text;
        done();
      });
  });

  it('should return status 200.', done => {
    status.should.equal(200);
    done();
  });

  it('should give a message.', done => {
    message.should.be.a('string');
    message.should.deep.equal('Login page!');
    done();
  });
});

describe('POST auth/login', () => {
  let status;

  before(done => {
    chai.request(app)
      .post('/auth/login')
      .set(
        'Content-Type', 'application/json'
      )
      .send({ 
        account: 'captainkrystal@gmail.com',
        password: 'hitoomedia'
       })
      .end((error, response) => {
        status = response.status;
        if (error) {
          done(error);
        } else {
          done();
        }
      });
  });

  after(() => knex('users').del());

  it('should return status 200.', done => {
    status.should.equal(302);
    done();
  });

});