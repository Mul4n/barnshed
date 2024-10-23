import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import BoudlerRoutes from './routes/BoulderRoutes.js';
import LedRoutes from './routes/LedRoutes.js';

await mongoose.connect('mongodb://localhost:27018/barnshed');

const app = express();
const port = 7668;

app.use(express.json());
app.use(cors());

app.use('/boulders', BoudlerRoutes);
app.use('/leds', LedRoutes);

app.get('/', (_, res) => {
  res.send('This is the api for the BarnBoard !');
});

app.listen(port, () => {
  console.log(`Its running ! Port: ${port}`);
});
