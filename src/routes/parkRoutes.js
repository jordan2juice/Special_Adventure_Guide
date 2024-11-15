"use strict";

const express = require("express");

const {
  getPark,
  getParkbyId,
  newPark,
  updatePark,
  deletePark,
} = require("../controllers/parkControllers");

const upload = require("../middleware/upload");

const park = express.Router();

park.route("/parks").post(upload.single("image"), newPark).get(getPark);

park.route("/parks/:id").get(getParkbyId);

park.route("/parks/:id").put(updatePark);

park.route("/parks/:id").delete(deletePark);

module.exports = park;
