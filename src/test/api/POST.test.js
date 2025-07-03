const { request, expect } = require('../../utils/api_request');
const { AUTH_ENDPOINT } = require('../../config/api_config');

describe('Create Auth Token', function () {
  it('Successfully token Generation', async function () {
    const credentials = { username: 'admin', password: 'password123' };
    const res = await request.post(AUTH_ENDPOINT).send(credentials);
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('token');
  });

  it('Generate token request with invalid credentials', async function () {
    const invalidCredentials = {
      username: 'admin',
      password: 'claveIncorrecta',
    };
    const res = await request.post(AUTH_ENDPOINT).send(invalidCredentials);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('reason');
  });
});
