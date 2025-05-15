"use strict";

const express = require("express");
const {
  getAttractions,
  updateAttraction,
  newAttraction,
  deleteAttraction,
  getAttractionById,
} = require("../controllers/attractionControllers");

const attraction = express.Router();

attraction.route("/attractions").get(getAttractions);

attraction.route("/attractions/:id").get(getAttractionById);

attraction.route("/attractions/:id").post(updateAttraction);

attraction.route("/attractions/:id").post(newAttraction);

attraction.route(".attractions/:id").delete(deleteAttraction);

module.exports = attraction;
