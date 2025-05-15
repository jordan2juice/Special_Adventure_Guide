"use strict";

const express = require("express");
const {
  getChild,
  getChildById,
  newChild,
  updateChild,
  deleteChild,
} = require("../controllers/childControllers");
const child = express.Router();

child.route("/child").get(getChild);

child.route("/child/:id").get(getChildById);

child.route("/child").post(newChild);

child.route("/child/:id").put(updateChild);

child.route("/child/:id").delete(deleteChild);

module.exports = child;
