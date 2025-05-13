"use strict";

const Park = require("../modals/Park");

async function home(req, res, next) {
  res.send("Welcome to the Park API");
}

async function newPark(req, res, next) {
  try {
    const { name, location, description } = req.body;
    const park = new Park({
      name,
      location,
      description,
    });
    await newPark.save();
    res.status(201).json(newPark);
  } catch (error) {
    next(error);
  }
}

async function getParks(req, res, next) {
  try {
    const parks = await Park.find();
    res.status(200).json(parks);
  } catch (error) {
    next(error);
  }
}

async function updateParks(req, res, next) {
  try {
    const park = await Park.findById(req.params.id);
    park.name = req.body.name;
    park.location = req.body.location;
    park.description = req.body.description;
    await park.save();
    if (!park) {
      res.status(404).send("Park not found");
    }
    res.status(200).json(park);
  } catch (error) {
    next(error);
  }
}

async function deletePark(req, res, next) {
  try {
    const { id } = req.params;
    const deletedPark = await Park.findByIdAndDelete(id);
    res.status(200).json(deletedPark);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  home,
  newPark,
  getParks,
  updateParks,
  deletePark,
};
