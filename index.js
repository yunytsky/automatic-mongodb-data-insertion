//Imports, configs
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const items = require("./data");
dotenv.config();


//Models
const fooSchema = new mongoose.Schema({
   foo: String,
   bar: Number
});

const Foo = mongoose.model("Foo", fooSchema);

//Database connection and data insertion
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log("Database connection has been successfully established");
      Foo.insertMany(items);
   })
   .catch(err => {
      console.log("Database connection error");
   });
