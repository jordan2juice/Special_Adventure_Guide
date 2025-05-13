"use strict";

const mongoose = require("mongoose");

const childProfileSchema = new mongoose.Schema(
  {
    userId: { name: String, required: true },
    name: String,
    age: Number,
    diagosis: [String],
    sensoryPreferences: {
      noise: Number,
      light: Number,
      crowds: Number,
    },
    tools: [String],
    notes: String,

    visitedParks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Park" }],
    favoriteAttractions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Attraction" },
    ],
    emergencySettings: {
      contacts: [
        {
          name: String,
          phone: String,
          relationship: String,
        },
      ],
      shareLocation: Boolean,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("ChildProfile", childProfileSchema);
