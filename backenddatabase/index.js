const express = require("express");
const { connection, ProductModel } = require("./connection");
const cors = require('cors')
const app = express()
app.use(cors())

app.use(express.json());

// ----------------------------------------get all products-----------------------------------------------------
app.get("/", async (req, res) => {
    try {
        res.send(await ProductModel.find())
    } catch (err) {
        console.log(err)
    }
})
// -----------------------------------------------------get by male-----------------------------------------------
app.get("/male", async (req, res) => {
    const { gender } = req.body
    const data = await ProductModel.find({ gender: "male" })
    res.send(data)

})
// -------------------------------------------------get by female----------------------------------------------------------------------
app.get("/female", async (req, res) => {
    const { gender } = req.body
    const data = await ProductModel.find({ gender: "female" })
    res.send(data)

})

// --------------------------------------------------post products----------------------------------------------------------------------
app.post("/products", async (req, res) => {
    const payload = req.body
    try {
        const data = new ProductModel(payload)
        await data.save()
        res.send(data)

    } catch (error) {
        console.log(error);
    }
})


// -----------------------------------------------------------server-------------------------------------------------------------------
app.listen(4000, async () => {
    try {
        await connection
        console.log("Connected to port 4000")
    } catch (err) {
        console.log(err)
    }

})