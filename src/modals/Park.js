"use strict";

const mongoose = require("mongoose");

const parkSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    description: String,
  },
  { timestamp: true }
);

module.exports = mongoose.model("Park", parkSchema);
