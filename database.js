"use strict";

const mongoose = require("mongoose");

const DB = process.env.DB;

async function mongooseConnect() {
  await mongoose.connect(DB);
}

module.exports = mongooseConnect;
