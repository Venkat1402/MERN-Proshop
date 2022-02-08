import express from 'express';
// asyncHandler for error handling for promises
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();

// @desc  Fetch all products
// @route GET api/products
// @acces Public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc  Fetch single product
// @route GET api/products/:id
// @acces Public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found'); // this will throw error to error handler middleware
    }
  })
);

export default router;
