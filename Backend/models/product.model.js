const mongoose = require("mongoose");

//creating product schema
const productSchema = mongoose.Schema({
    imageURL:String,
    brand: String,
    product: String,
    gender: String,
    category: String,
    price: Number
},{
  versionKey:false
});

//creating product model
const Product = mongoose.model("product", productSchema);
module.exports={
  Product
}
