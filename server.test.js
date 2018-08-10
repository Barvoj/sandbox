const request = require('supertest');
const expect = require('expect');
const app = require('./server');

describe('Test homepage', () => {
  it('should return status code 200', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.text).toContain('Hello world');
      })
      .end(done);
  });
});

