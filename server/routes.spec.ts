import request from 'supertest';
import { describe, it, expect } from 'vitest';
import { createServer } from './index';

const app = createServer();

describe('API Routes', () => {
  it('GET /api/ping', async () => {
    const res = await request(app).get('/api/ping');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from Express server v2!' });
  });

  it('GET /api/demo', async () => {
    const res = await request(app).get('/api/demo');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello from Express server' });
  });
});
