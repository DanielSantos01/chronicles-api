import 'dotenv/config';
import './utils/connectDB';
import { configureApp } from './utils';

const app = configureApp();

app.listen(process.env.PORT || 3001, () => {
  console.log(`🏃‍ The server is running at port ${process.env.PORT || 3001}!`);
});
