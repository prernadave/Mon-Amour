const mongoose = require("mongoose")
require('dotenv').config()

const connection = mongoose.connection(process.env.url)

module.exports={connection}

