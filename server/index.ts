"use strict";

import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "./model";
import router from "./router";

const app: Application = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(router);

(async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/WhatToWatch");
    app.listen(port, () => {
      console.log(
        `Server running on PORT ${port} and Database has successfully connected!🕊️`
      );
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Database could not connect: ${e.message}`);
    } else {
      console.log(
        "An unknown error occurred while connecting to the database."
      );
    }
  }
})();
