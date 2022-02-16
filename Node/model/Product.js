const mongoose = require("mongoose");



const productSchema = new mongoose.Schema({
  pname: String,
  price: String,
  vendor: String,
  quantity: String,
  warranty: String
});



module.exports = mongoose.model("Product", productSchema);
  