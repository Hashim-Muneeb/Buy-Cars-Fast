const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoUrl = "mongodb://0.0.0.0:27017/renting_db";


mongoose
  .connect(mongoUrl, {})
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

const User = require("./users");

///////////------------REGISTER API----------------////////////////
app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const encrypetrdPassword = await bcrypt.hash(password, 10);
  try {
    await User.create({
      fname,
      lname,
      email,
      password: encrypetrdPassword,
    });

    res.send({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});




