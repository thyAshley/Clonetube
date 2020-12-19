import app from './src/app';
import { sequelize } from './src/database';

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    console.log('✔ Database Connected and cleaned up');
  })
  .catch((err) => {
    console.log('❌ Failed to connec to database');
    console.error(err);
  });

app.listen(PORT, async () => {
  console.log(`✔ Server listening on port ${PORT}`);
});
