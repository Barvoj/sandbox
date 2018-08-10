const request = require('supertest');
const app = require('./server');

describe('Test homepage', () => {
  it('should return status code 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello world')
      .end(done);
  });
});

