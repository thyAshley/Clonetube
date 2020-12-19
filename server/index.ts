import app from './src/app';
import { sequelize } from './src/database';
import User from './models/User';

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`✔ Server listening on port ${PORT}`);
  try {
    await sequelize.sync();
    await User.destroy({ truncate: true });
    await User.create({
      name: 'ash',
      email: 'ash',
    });
  } catch (error) {
    console.log(error);
  }
});
