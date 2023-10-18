const request = require('supertest');
const app = require('../server/server.js'); 
describe('GET /', () => {
  it('responds with status 200 and serves the HTML file', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.type).toBe('text/html');
    expect(response.text).toEqual(
      expect.stringContaining('<!DOCTYPE html>')
    );
  });
});
describe('POST /login', () => {
    it('responds with status 200 and returns the user ID in JSON', async () => {
      const response = await request(app).post('/login');
  
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body).toHaveProperty('userID');
    });
  });
  describe('POST /login/signup', () => {
    it('responds with status 200 and returns the user ID in JSON after signing up', async () => {
      const response = await request(app).post('/login');
  
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body).toHaveProperty('userID');
    });
  });
  describe('GET /birds', () => {
    it('responds with status 200 and returns a JSON array of all birds', async () => {
      const response = await request(app).get('/birds');
  
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  describe('GET /birds/getBird', () => {
    it('responds with status 200 and returns a JSON array of birds', async () => {
      const response = await request(app).get('/birds/getBird');
  
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');
      expect(response.body).toBeInstanceOf(Array);
    });
  });

 
 