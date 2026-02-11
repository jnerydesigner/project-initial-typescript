"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../src/app");
const supertest_1 = __importDefault(require("supertest"));
const vitest_1 = require("vitest");
(0, vitest_1.describe)('Health Check', () => {
    (0, vitest_1.it)('should return status ok', async () => {
        const app = (0, app_1.createApp)();
        const response = await (0, supertest_1.default)(app).get('/health');
        (0, vitest_1.expect)(response.status).toBe(200);
        (0, vitest_1.expect)(response.body).toHaveProperty('status', 'ok');
    });
});
