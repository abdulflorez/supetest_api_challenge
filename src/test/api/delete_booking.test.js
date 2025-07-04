const { expect } = require('../../utils/api_request');
const {
  createBooking,
  deleteBooking,
  getBookingById,
} = require('../../operations/api/booking');
const { getToken } = require('../../operations/api/auth');

describe('Delete Booking', function () {
  it('should delete the booking with a valid token and respond with correct status', async function () {
    const token = await getToken();

    const bookingToDelete = {
      firstname: 'Laura',
      lastname: 'Martinez',
      totalprice: 300,
      depositpaid: false,
      bookingdates: {
        checkin: '2025-03-10',
        checkout: '2025-03-12',
      },
      additionalneeds: 'None',
    };
    const createRes = await createBooking(bookingToDelete);
    const bookingId = createRes.body.bookingid;

    const deleteRes = await deleteBooking(bookingId, token);

    expect(deleteRes.status).to.equal(201);

    const getRes = await getBookingById(bookingId);
    expect(getRes.status).to.equal(404);
  });
});
