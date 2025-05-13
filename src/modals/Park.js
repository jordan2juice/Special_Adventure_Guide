"use strict";

const mongoose = require("mongoose");

const parkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: String,
    description: String,
  },
  { timestamp: true }
);

module.exports = mongoose.model("Park", parkSchema);
