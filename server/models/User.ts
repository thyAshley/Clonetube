import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../src/database';

interface IUser {
  id?: string;
  name: string;
  email: string;
  googleID?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserInstance extends Model<IUser> {}

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
