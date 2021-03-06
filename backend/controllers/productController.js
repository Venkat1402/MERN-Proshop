// asyncHandler for error handling for promises
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc  Fetch all products
// @route GET api/products
// @acces Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc  Fetch single product
// @route GET api/products/:id
// @acces Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found'); // this will throw error to error handler middleware
  }
});

export { getProducts, getProductById };
