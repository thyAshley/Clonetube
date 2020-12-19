import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('Clonetube', 'postgres', 'test123', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});
