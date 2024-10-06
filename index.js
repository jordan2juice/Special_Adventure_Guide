"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const mongooseConnect = require("./database");

app.use(cors());
app.use(express.json());

mongooseConnect().catch((error) => {
  console.log(error);
});
