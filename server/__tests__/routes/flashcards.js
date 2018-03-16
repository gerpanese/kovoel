const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');

chai.use(chaiHttp);

const PORT = process.env.PORT || 9000;
const END_POINT = '/api/users/1/flashcards';

const server = app.listen(PORT);
chai.use(chaiHttp);

describe('server/routes/flashcards', () => {
  afterAll((done) => {
    server.close(done);
  });

  describe('GET /users/:userId/flashcards', () => {
    it('should fetch data', done => (
      chai.request(server)
        .get(END_POINT)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          expect(err).toEqual(null);
          expect(res.status).toEqual(200);
          expect(res.body.length).toEqual(4);
          for (const flashcard of res.body) {
            expect(flashcard).toHaveProperty('id');
            expect(flashcard).toHaveProperty('user_id');
            expect(flashcard).toHaveProperty('preview');
            expect(flashcard).toHaveProperty('translation');
            expect(flashcard).toHaveProperty('romanji');
            expect(flashcard).toHaveProperty('note');
            expect(flashcard).toHaveProperty('created_at');
          }
          done();
        })
    ));
  });

  describe('POST /users/:userId/flashcards', () => {
    it('should respond with success status', () => {
      chai.request(server)
        .post(END_POINT)
        .send({
          userId: '1',
          preview: 'もう一回',
          translation: 'One more time',
          romanji: 'mo ikkai',
          note: 'this is test',
        })
        .end((err, res) => {
          expect(err).toEqual(null);
          expect(res.status).toEqual(200);
          expect(res.body.status).toEqual('success');
          done();
        });
    });
  });

  describe('GET /users/:userId/flashcards/:id', () => {
    it('should fetch data of one flashcard ', () => {
      chai.request(server)
        .get(`${END_POINT}/1`)
        .end((err, res) => {
          expect(err).toEqual(null);
          expect(res.status).toEqual(200);
          expect(flashcard).toHaveProperty('id');
          expect(flashcard).toHaveProperty('user_id');
          expect(flashcard).toHaveProperty('preview');
          expect(flashcard).toHaveProperty('translation');
          expect(flashcard).toHaveProperty('romanji');
          expect(flashcard).toHaveProperty('note');
          expect(flashcard).toHaveProperty('created_at');
          done();
        });
    });
  });

  describe('DELETE /users/:userId/flashcards/:id', () => {
    it('should delete data of a flashcard', () => {
      chai.request(server)
        .delete(`${END_POINT}/1`)
        .end((err, res) => {
          expect(err).toEqual(null);
          expect(res.status).toEqual(200);
          expect(res.body.status).toEqual('success');
        });
    });
  });
});
