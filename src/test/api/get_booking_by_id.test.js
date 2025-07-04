const { expect } = require('../../utils/api_request');
const {
  createBooking,
  getBookingById,
} = require('../../operations/api/booking');

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
    const createRes = await createBooking(tempBooking);
    const bookingId = createRes.body.bookingid;

    const res = await getBookingById(bookingId);
    expect(res.status).to.equal(200);
    expect(res.body.firstname).to.equal(tempBooking.firstname);
    expect(res.body.lastname).to.equal(tempBooking.lastname);
    expect(res.body.totalprice).to.equal(tempBooking.totalprice);
  });

  it('Request booking by invalid ID returns 404', async function () {
    const res = await getBookingById(99999999);
    expect(res.status).to.equal(404);
  });
});
