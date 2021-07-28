const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  orderId: Number,
  item_name: String,
  cost: Number,
  order_date: String,
  delivery_date: String
});

module.exports = mongoose.model('Order', orderSchema);
