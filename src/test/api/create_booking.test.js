const { expect } = require('../../utils/api_request');
const { createBooking } = require('../../operations/api/booking');

describe('Create Booking', function () {
  it('Create a new booking and return booking details', async function () {
    const newBooking = {
      firstname: 'Jim',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: '2018-01-01',
        checkout: '2019-01-01',
      },
      additionalneeds: 'Breakfast',
    };

    const res = await createBooking(newBooking);
    expect(res.status).to.be.oneOf([200, 201]);
    expect(res.body).to.have.property('bookingid').that.is.a('number');
    expect(res.body).to.have.property('booking').that.is.an('object');
    expect(res.body.booking.firstname).to.equal(newBooking.firstname);
    expect(res.body.booking.lastname).to.equal(newBooking.lastname);
  });
});
