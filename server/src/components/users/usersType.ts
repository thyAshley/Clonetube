import { DataTypes, Model, Optional } from 'sequelize';

export interface UserAttribute {
  id?: string;
  name: string;
  email: string;
  googleID?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInstance extends Model<UserAttribute> {}
