const express = require("express");
const { connection, ProductModel } = require("./connection");
const cors = require('cors');
const { userModel } = require("./user.model");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
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

app.get("/sortfm", async (req, res) => {
  const { gender } = req.body
  const data = await ProductModel.find({ gender: "female" }).sort({ "price": 1 })
  res.send(data)
  // console.log(data);
})
app.get("/filter", async (req, res) => {
  try {
    let query = req.query.items;
    let filter = query.replace(/\[|\]/g, "").split(",")
    let products = await ProductModel.find({ category: { $in: filter } });
    return res.status(200).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});



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

// ------------------------------------------Register And Login--------------------------------------------------------------------------------------

app.post("/register", async (req, res) => {
  let { name, email, password } = req.body;
  console.log(req.body);

  try {
    bcrypt.hash(password, 5, async (err, secure_password) => {
      if (err) {
        console.log({ 'err': err })
      } else {
        const data = new userModel({ name, email, password: secure_password });
        await data.save()
        res.send(data);
        console.log(data);
      }
    })
  } catch (error) {
    console.log({ 'error': error });
    console.log('Something went wrong');
  }
})

// ----------------------------------------Login----------------------------------------------------------------------------------------------------------------

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.find({ email });
    const hashed_pass = user[0].password;

    if (user.length > 0) {
      bcrypt.hash(password, hashed_pass, (err, result) => {
        console.log(result);
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "masai");
          res.send({ "msg": "login successfully", "token": token , "name":user[0].name});
        } else {
          res.send("wrong cred");
        }
      });
    } else {
      res.send("wrong credentialss");
    }
  } catch (err) {
    console.log({ err: "err" });
    res.send({ "msg": "error crede in login" });
  }
});

// -----------------------------------------------------------server-------------------------------------------------------------------
app.listen(4000, async () => {
  try {
    await connection
    console.log("Connected to port 4000")
    console.log('connected to DB');
  } catch (err) {
    console.log(err)
  }

})