"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const health_controller_1 = require("@presenters/controllers/health.controller");
const vitest_1 = require("vitest");
(0, vitest_1.describe)('HealthController', () => {
    (0, vitest_1.it)('should return status ok and timestamp', () => {
        // 🔹 mock mínimo do Response
        const res = {
            json: vitest_1.vi.fn(),
        };
        // 🔹 Request não é usado, pode ser vazio
        const req = {};
        health_controller_1.HealthController.check(req, res);
        // 🔍 asserts
        (0, vitest_1.expect)(res.json).toHaveBeenCalledOnce();
        (0, vitest_1.expect)(res.json).toHaveBeenCalledWith(vitest_1.expect.objectContaining({
            status: 'ok',
            timestamp: vitest_1.expect.any(String),
        }));
    });
});
