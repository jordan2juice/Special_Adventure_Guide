"use strict";

const Parks = require("../modals/Parks");

async function home(req, res, next) {
  res.send("Welcome to Special Adventure Guide");
}

async function newPark(req, res, next) {
  try {
    const { name, location, description, phone, email, image } = req.body;
    const newPark = new Parks({
      name,
      location,
      description,
      phone,
      email,
      image: req.file.path,
    });
    await newPark.save();
    res.status(201).send("Park added successfully");
  } catch (error) {
    next(error);
  }
}

async function getPark(req, res, next) {
  try {
    const park = await park.find();
    res.status(200).json(park);
  } catch (error) {
    next(error);
  }
}

async function getParkbyId(req, res, next) {
  try {
    const park = await Parks.findById(req.params.id);
    if (!park) {
      res.status(404).send("Park not found");
    }
    res.status(200).json(park);
  } catch (error) {
    next(error);
  }
}

async function updatePark(req, res, next) {
  try {
    const park = await Parks.findByIdAndUpdate(req.params.id);
    park.name = req.body.name || park.name;
    park.location = req.body.location || park.location;
    park.description = req.body.description || park.description;
    park.phone = req.body.phone || park.phone;
    park.email = req.body.email || park.email;
    park.image = req.body.image || park.image;

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
    const deletePark = await Parks.findByIdAndDelete(id);
    res.status(200).json(deletePark);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  home,
  newPark,
  getPark,
  getParkbyId,
  updatePark,
  deletePark,
};
