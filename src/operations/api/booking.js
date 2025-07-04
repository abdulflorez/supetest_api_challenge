const { request } = require('../../utils/api_request');
const { BOOKING_ENDPOINT } = require('../../config/api_config');

async function createBooking(bookingData) {
  const res = await request
    .post(BOOKING_ENDPOINT)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(bookingData);
  return res;
}

async function getBookingById(bookingId) {
  return request
    .get(`${BOOKING_ENDPOINT}/${bookingId}`)
    .set('Accept', 'application/json');
}

async function updateBooking(bookingId, bookingData, token) {
  return request
    .put(`${BOOKING_ENDPOINT}/${bookingId}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Cookie', `token=${token}`)
    .send(bookingData);
}

async function deleteBooking(bookingId, token) {
  return request
    .delete(`${BOOKING_ENDPOINT}/${bookingId}`)
    .set('Content-Type', 'application/json')
    .set('Cookie', `token=${token}`);
}

module.exports = {
  createBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
};
