import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import BoudlerRoutes from './routes/BoulderRoutes.js';

await mongoose.connect('mongodb://localhost:27018/barnshed');

const app = express();
const port = 7668;

app.use(express.json());
app.use(cors());
app.use('/boulders', BoudlerRoutes)

app.get('/', (_, res) => {
  res.send('Coucou');
});

app.listen(port, () => {
  console.log(`Its runnning ! Port: ${port}`);
});