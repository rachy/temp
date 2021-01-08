import supertest from 'supertest';
import app from "../src/index"; // Link to your server file
import transform from '../src/utilities/transform';

const request = supertest(app);

// test api/images endpoint
test('gets the api/images endpoint', async done => {
  const response = await request.get('/api/image');
  expect(response.status).toBe(200);
  done();
});

// Test sample image transformation that exists
test("Should not throw", async () => {
  await expect(transform('argentina', 300, 300)).resolves.not.toThrow();
});

// Test sample image transformation that does not exist
test("Should throw error message", async () => {
  await expect(transform('argent', 300, 300)).rejects.toThrow('Input file is missing');
});
