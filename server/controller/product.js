const Product = require('../model/product');

const getAllProduct = (req, res) => {
  Product.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: 'products not found', error: err.message });
    });
};

const oneProduct = (req, res) => {
  Product.find(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: 'product not found', error: err.message });
    });
};
const addProduct = (req, res) => {
  Product.create(req.body).then((data) => {
    res.status(201).json({ message: 'successfuly added', data });
  }).catch((err)=>{
    res
    .status(400)
    .json({ message: 'failed add', error: err.message });
  })
};

const deleteProduct = (req, res) => {};

const updateProduct = (req, res) => {};

module.exports = {
  getAllProduct,
  addProduct,
  deleteProduct,
  updateProduct,
  oneProduct,
};
