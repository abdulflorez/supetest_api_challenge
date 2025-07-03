const { request, expect } = require('../../utils/api_request');
const { AUTH_ENDPOINT, BOOKING_ENDPOINT } = require('../../config/api_config');

describe('Update Booking', function () {
  it('Update booking data with a valid token', async function () {
    // Step 1: Get a valid token
    const credentials = { username: 'admin', password: 'password123' };
    const authRes = await request
      .post(AUTH_ENDPOINT)
      .set('Content-Type', 'application/json')
      .send(credentials);
    expect(authRes.status).to.equal(200);
    const token = authRes.body.token;

    // Step 2: Create a booking to update
    const originalBooking = {
      firstname: 'Mario',
      lastname: 'Lopez',
      totalprice: 100,
      depositpaid: true,
      bookingdates: {
        checkin: '2025-02-01',
        checkout: '2025-02-05',
      },
      additionalneeds: 'Lunch',
    };
    const createRes = await request
      .post(BOOKING_ENDPOINT)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(originalBooking);
    expect(createRes.status).to.be.oneOf([200, 201]);
    const bookingId = createRes.body.bookingid;

    // Step 3: Prepare updated data
    const updatedData = {
      firstname: 'Mario',
      lastname: 'Gonzalez',
      totalprice: 120,
      depositpaid: true,
      bookingdates: {
        checkin: '2025-02-01',
        checkout: '2025-02-05',
      },
      additionalneeds: 'Lunch',
    };

    // Step 4: Update the booking (include Accept header!)
    const updateRes = await request
      .put(`${BOOKING_ENDPOINT}/${bookingId}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Cookie', `token=${token}`)
      .send(updatedData);

    expect(updateRes.status).to.equal(200);
    expect(updateRes.body.lastname).to.equal('Gonzalez');
    expect(updateRes.body.totalprice).to.equal(120);
    expect(updateRes.body.firstname).to.equal('Mario');
    expect(updateRes.body.depositpaid).to.equal(true);
  });
});
