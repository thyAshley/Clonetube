import { UnexpectedException } from '../utility/ErrorService';
import User from './usersModel';

export const existingUser = (email: string) => {
  return User.findOne({ where: { email } });
};

export const createUser = async (
  name: string,
  email: string,
  googleID: string,
) => {
  try {
    const user = await existingUser(email);
    if (!user) {
      await User.create({
        name: name,
        email: email,
        googleID: googleID,
      });
    }
  } catch (error) {
    throw new UnexpectedException();
  }
};
