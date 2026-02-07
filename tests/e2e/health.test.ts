import { createApp } from '../../src/app';
import request from 'supertest';
import { describe, it, expect } from 'vitest';

describe('Health Check', () => {
  it('should return status ok', async () => {
    const app = createApp();

    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'ok');
  });
});
