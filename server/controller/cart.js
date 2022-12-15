const Cart = require('../model/cart');

const getAllCarts = (req, res) => {
  Cart.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: 'Cart not found', error: err.message });
    });
};

const getUserCart = (req, res) => {
  Cart.findOne({ userId: req.params.userId })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: 'Cart not found', error: err.message });
    });
};
const deleteCart =()=>{
    Cart.findByIdAndDelete(req.params.id)
    .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(404).json({ message: 'Cart not found', error: err.message });
      });
}

module.exports = { getAllCarts, getUserCart ,deleteCart};
