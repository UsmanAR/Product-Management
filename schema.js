const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  featured: { type: Boolean, default: false },
  rating: { type: Number, min: 0, max: 5 },
  createdAt: { type: Date, default: Date.now },
  company: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
