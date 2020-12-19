import User from './usersModel';

export const createUser = async (
  name: string,
  email: string,
  googleID: string,
) => {
  try {
    await User.create({
      name: name,
      email: email,
      googleID: googleID,
    });
  } catch (error) {
    throw new Error(error);
  }
};
