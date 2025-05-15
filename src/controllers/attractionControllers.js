"use strict";

const Attraction = require("../modals/Attractions");

async function newAttraction(req, res, next) {
  try {
    const { name, parkid, description, sensoryRating, waitTimes, quietHours } =
      req.body;
    const newAttraction = new Attraction({
      name,
      parkid,
      description,
      sensoryRating: {
        noise: sensoryRating.noise,
        light: sensoryRating.light,
        crowds: sensoryRating.crowds,
      },
      waitTimes,
      quietHours,
    });
    await newAttraction.save();
    res.status(201).json(newAttraction);
  } catch (error) {
    next(error);
  }
}

async function getAttractions(req, res, next) {
  try {
    const attractions = await Attraction.find();
    res.status(200).json(attractions);
  } catch (error) {
    next(error);
  }
}

async function getAttractionById(req, res, next) {
  try {
    const { id } = req.params;
    const attraction = await Attraction.findById(id);
    if (!attraction) {
      return res.status(404).json({ message: "Attraction not found" });
    }
    res.status(200).json(attraction);
  } catch (error) {
    next(error);
  }
}

async function updateAttraction(req, res, next) {
  try {
    const attraction = await Attraction.findById(req.params.id);
    attraction.name = req.body.name || attraction.name;
    attraction.parkid = req.body.parkid || attraction.parkid;
    attraction.description = req.body.description || attraction.description;
    (attraction.sensoryRating = {
      noise: req.body.sensoryRating.noise || attraction.sensoryRating.noise,
      light: req.body.sensoryRating.light || attraction.sensoryRating.light,
      crowds: req.body.sensoryRating.crowds || attraction.sensoryRating.crowds,
    }),
      (attraction.waitTimes = {
        current: req.body.waitTimes.current || attraction.waitTimes.current,
        average: req.body.waitTimes.average || attraction.waitTimes.average,
      }),
      (attraction.quietHours = req.body.quietHours || attraction.quietHours);
    await attraction.save();
    if (!attraction) {
      res.status(404).send("Attraction not found");
    }
    res.status(200).json(attraction);
  } catch (error) {
    next(error);
  }
}

async function deleteAttraction(req, res, next) {
  try {
    const { id } = req.params;
    const deletedAttraction = await Attraction.findByIdAndDelete(id);
    res.status(200).json(deletedAttraction);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  newAttraction,
  getAttractions,
  getAttractionById,
  updateAttraction,
  deleteAttraction,
};
