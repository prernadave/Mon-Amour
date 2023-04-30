const mongoose = require("mongoose")
mongoose.set("strictQuery", true)
require('dotenv').config()
const connection = mongoose.connect(process.env.url)
const productSchema = mongoose.Schema({

  imageURL: { type: String, required: true },
  brand: { type: String, required: true },
  product: { type: String, required: true },
  gender: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  strikedOffPrice: { type: Number, required: false },
},
  {
    versionKey: false,
    timestamps: true,
  }
);
const ProductModel = mongoose.model("product", productSchema);

module.exports = {
  connection,
  ProductModel
}