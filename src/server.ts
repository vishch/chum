import dotenv from 'dotenv';
import express from 'express';
import logger from './infrastructure';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from concurrent node');
});

app.listen(port, () => {
  logger.debug(`Listening on port${port}`);
});
