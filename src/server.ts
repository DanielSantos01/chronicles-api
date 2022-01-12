import express from 'express';

import 'dotenv/config';

const app = express();

app.get('/', (req, res) => res.send('listening'));

app.listen(process.env.PORT || 3001, () => {
  console.log(`🏃‍ The server is running at port ${process.env.PORT || 3001}!`);
});
