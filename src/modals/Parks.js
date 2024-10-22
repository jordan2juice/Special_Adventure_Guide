"use strict";

const mongoose = require("mongoose");

const parksSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
});

const Parks = mongoose.model("Parks", parksSchema);

module.exports = Parks;
