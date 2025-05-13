"use strict";

const mongoose = require("mongoose");

const attractionSchema = new mongoose.Schema(
  {
    name: String,
    parkid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Park",
      required: true,
    },
    description: String,
    sensoryRating: {
      noise: Number,
      light: Number,
      crowds: Number,
    },
    waitTimes: {
      current: Number,
      average: Number,
    },
    quietHours: [String],
  },
  { timestamp: true }
);

module.exports = mongoose.model("Attraction", attractionSchema);
