const express= require('express')
const { connection } = require('mongoose')
const { productRoute } = require('./routes/men')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use("/products",productRoute)



app.listen(4040, async()=>{
    try {
        await connection
        console.log("connected to Mon Amour Db");
    } catch (error) {
        console.log("Can't connect to Mon Amour Db", error);
    }
   console.log(`server running on port 4040`);

})
