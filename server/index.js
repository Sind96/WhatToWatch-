const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const mongoose = require("./model");

const port = 3000;
const router = require("./router");

app.use(bodyParser.json());
app.use(cors());
app.use(router);

(async function () {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/WhatToWatch");
    app.listen(port);
    console.log(
      `Server running on PORT ${port} and Database has successfully connected!🕊️`
    );
  } catch (e) {
    console.log(`Database could not connect:`, e);
  }
})();
