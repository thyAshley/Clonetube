import { DataTypes } from 'sequelize';
import { sequelize } from '../../database';
import { UserInstance } from './usersType';

const User = sequelize.define<UserInstance>('User', {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  googleID: {
    type: DataTypes.STRING,
  },
});

export default User;
