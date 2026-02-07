/* eslint-disable @typescript-eslint/no-explicit-any */
import { HealthController } from '@presenters/controllers/health.controller';
import { describe, it, expect, vi } from 'vitest';

describe('HealthController', () => {
  it('should return status ok and timestamp', () => {
    // 🔹 mock mínimo do Response
    const res = {
      json: vi.fn(),
    } as any;

    // 🔹 Request não é usado, pode ser vazio
    const req = {} as any;

    HealthController.check(req, res);

    // 🔍 asserts
    expect(res.json).toHaveBeenCalledOnce();
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 'ok',
        timestamp: expect.any(String),
      }),
    );
  });
});
