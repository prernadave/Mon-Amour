const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})


const userModel = mongoose.model("users", userschema)
module.exports = {
    userModel
}
