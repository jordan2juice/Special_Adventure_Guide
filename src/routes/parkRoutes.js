"use strict";

const express = require("express");
const {
  getParks,
  getParkById,
  newPark,
  updateParks,
  deletePark,
} = require("../controllers/parkControllers");
const park = express.Router();

park.route("/parks").get(getParks);

park.route("/parks/:id").get(getParkById);

park.route("/parks").post(newPark);

park.route("/parks/:id").put(updateParks);

park.route("/parks/:id").delete(deletePark);

module.exports = park;
