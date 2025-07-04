const { expect } = require('../../utils/api_request');
const { getToken } = require('../../operations/api/auth');

describe('Create Authentication Token', function () {
  it('Successfully token request with correct credentials', async function () {
    const token = await getToken();
    expect(token).to.be.a('string');
  });

  it('Error token request with invalid credentials', async function () {
    try {
      await getToken('admin', 'wrongPassword');
    } catch (err) {
      expect(err.message).to.include('Failed to retrieve token');
    }
  });
});
