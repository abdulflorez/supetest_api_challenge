const { request, expect } = require('../../utils/api_request');
const { BOOKING_ENDPOINT } = require('../../config/api_config');

describe('Get Booking by ID', function () {
  it('Get booking data for a valid booking ID', async function () {
    const tempBooking = {
      firstname: 'Carlos',
      lastname: 'Garcia',
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: '2025-01-10',
        checkout: '2025-01-15',
      },
      additionalneeds: 'Breakfast',
    };
    const createRes = await request
      .post(BOOKING_ENDPOINT)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(tempBooking);
    expect(createRes.status).to.be.oneOf([200, 201]);
    const bookingId = createRes.body.bookingid;

    const res = await request
      .get(`${BOOKING_ENDPOINT}/${bookingId}`)
      .set('Accept', 'application/json');
    expect(res.status).to.equal(200);
    expect(res.body.firstname).to.equal(tempBooking.firstname);
    expect(res.body.lastname).to.equal(tempBooking.lastname);
    expect(res.body.totalprice).to.equal(tempBooking.totalprice);
  });

  it('Request booking by invalid ID returns 404', async function () {
    const res = await request
      .get(`${BOOKING_ENDPOINT}/999999`)
      .set('Accept', 'application/json');
    expect(res.status).to.equal(404);
  });
});
