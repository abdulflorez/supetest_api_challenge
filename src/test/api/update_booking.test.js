const { expect } = require('../../utils/api_request');
const { createBooking } = require('../../operations/booking');

describe('Update Booking', function () {
  it('Update booking data with a valid token', async function () {
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

    const token = await getToken();
    const resCreate = await createBooking(originalBooking);
    const bookingId = resCreate.body.bookingid;
    const resUpdate = await updateBooking(bookingId, updatedData, token);

    expect(resUpdate.status).to.equal(200);
    expect(resUpdate.body.lastname).to.equal('Gonzalez');
    expect(resUpdate.body.totalprice).to.equal(120);
    expect(resUpdate.body.firstname).to.equal('Mario');
    expect(resUpdate.body.depositpaid).to.equal(true);
  });
});
