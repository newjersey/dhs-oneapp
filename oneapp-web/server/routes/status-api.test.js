process.env.PORT = 2000 + Math.floor(Math.random() * 10000)

const request = require('supertest');
const app = require('../test-app')

describe('/status', () => {
    test('GET /status', async () => {

        const response = await request(app).get("/status")
        
        expect(response.status).toEqual(200)
        expect(response.type).toEqual("application/json")
        expect(typeof response.body.started).toBe('string')
        expect(typeof response.body.uptime).toBe('number')

    });
});