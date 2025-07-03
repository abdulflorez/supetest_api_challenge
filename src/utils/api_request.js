const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const { BASE_URL } = require('../config/api_config');
const request = supertest(BASE_URL);

module.exports = { request, expect };
