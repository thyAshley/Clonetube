import request from 'supertest';

import * as statusCode from '../utility/statusCode';
import app from '../../app';
import { sequelize } from '../../database';
import User from './usersModel';

const mockToken =
  'ya29.a0AfH6SMDDlXyYWMZ495GPI2rxjR4x2-KxegRkmUtjJjkNHaL9-QUa7P5kuVqWiYtXcuXZUVFY2jDFEbjgM1tzXaLoAgf1dlCOKuy5o3TLsOYhZZTM700IelCr0MUcJgkZ2wUUkTXTOOT2e6FrdxdfhMtBOgpK85uOv87pPmYTHDU';

const mockId = '113875160233601051188';

beforeAll(async () => {
  await sequelize.sync();
});

afterEach(async () => {
  await User.destroy({ truncate: true });
});

describe('User Login Test', () => {
  describe('When signing in without invalid credentials', () => {
    const timeBeforeRequest = Date.now();
    let response: request.Response;
    beforeAll(async () => {
      response = await request(app)
        .post('/api/v1/users/signin')
        .send({ accessToken: 'failed token', googleId: '123321' });
    });
    it('returns error code 401, unauthorize access', async () => {
      expect(response.status).toBe(statusCode.UNAUTHORIZE);
    });
    it('returns error body', async () => {
      expect(response.body.name).toBe('UnAuthorizedException');
      expect(response.body.message).toBe(
        'You are not authorize to perform this action, please log in again',
      );
      expect(response.body.time).toBeGreaterThan(timeBeforeRequest);
    });
  });
  describe('When signing in with valid credentials', () => {
    const timeBeforeRequest = Date.now();
    let response: request.Response;
    beforeAll(async () => {
      response = await request(app)
        .post('/api/v1/users/signin')
        .send({ accessToken: mockToken, googleId: mockId });
    });
    it('returns 200 OK', () => {
      console.log(response.body);
    });
  });
});
