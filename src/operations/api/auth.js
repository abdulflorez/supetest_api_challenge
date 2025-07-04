const { request } = require('../../utils/api_request');
const { AUTH_ENDPOINT } = require('../../config/api_config');

async function getToken(username = 'admin', password = 'password123') {
  const res = await request
    .post(AUTH_ENDPOINT)
    .set('Content-Type', 'application/json')
    .send({ username, password });
  if (res.body && res.body.token) {
    return res.body.token;
  }
  throw new Error('Failed to retrieve token');
}

module.exports = { getToken };
