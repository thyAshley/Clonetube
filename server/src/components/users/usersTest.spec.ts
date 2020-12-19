import request from 'supertest';

import * as statusCode from '../utility/statusCode';
import app from '../../app';

describe('User Login Test', () => {
  describe('When signing in without name', () => {
    it.each`
      field      | value   | expectedMessage
      ${'name'}  | ${null} | ${'Name cannot be null'}
      ${'email'} | ${null} | ${'Name cannot be null'}
    `('returns bad request 400', async ({ field, value }) => {
      const validInput = {
        name: 'test',
        email: 'test@mail.com',
      };
      const response = await request(app)
        .post('/api/v1/users/signin')
        .send({ ...validInput, [field]: value });
      expect(response.status).toBe(400);
    });
  });
});
