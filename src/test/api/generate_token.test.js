const { request, expect } = require('../../utils/api_request');
const { AUTH_ENDPOINT } = require('../../config/api_config');

describe('Create Authentication Token', function () {
  it('Successfully token request with correct credentials', async function () {
    const credentials = { username: 'admin', password: 'password123' };
    const res = await request
      .post(AUTH_ENDPOINT)
      .set('Content-Type', 'application/json')
      .send(credentials);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token').that.is.a('string');
  });

  it('Error token request with invalid credentials', async function () {
    const invalidCredentials = { username: 'admin', password: 'wrongPassword' };
    const res = await request
      .post(AUTH_ENDPOINT)
      .set('Content-Type', 'application/json')
      .send(invalidCredentials);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('reason');
  });
});
