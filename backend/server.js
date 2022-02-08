import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';
import colors from 'colors';

import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddlewares.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is Running...');
});

app.use('/api/products', productRoutes);

// middleware for checking if total url is wrong
app.use(notFound);

// middleware for checking if id is wrong
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);
