const express = require('express')
const { Product } = require('../models/product.model')
const productRoute = express.Router()


productRoute.post("/",async(req,res)=>{
try{
 await Product.insertMany(req.body)
 console.log(req.body);
res.send(await Product.find());
}catch(err){
    console.log(err);
    res.send(err)
}
})

module.exports={
    productRoute
}