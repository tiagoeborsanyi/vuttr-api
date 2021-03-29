import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('Should enable CORS', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .expect('access-control-aalow-origin', '*')
      .expect('access-control-aalow-methods', '*')
      .expect('access-control-aalow-headers', '*')
  })
})
