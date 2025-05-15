"use Strict";

const Child = require("../modals/Child");

async function getChild(req, res, next) {
  try {
    const children = await Child.find();
    res.status(200).json(children);
  } catch (error) {
    next(error);
  }
}

async function getChildById(req, res, next) {
  try {
    const child = await Child.findById(req.params.id);
    if (!child) {
      res.status(404).json({ message: "Child not found" });
    }
    res.status(200).json(child);
  } catch (error) {
    next(error);
  }
}

async function newChild(req, res, next) {
  try {
    const { name, age, sensoryRating } = req.body;
    const newChild = new Child({
      name,
      age,
      sensoryRating: {
        noise: sensoryRating.noise,
        light: sensoryRating.light,
        crowds: sensoryRating.crowds,
      },
    });
    await newChild.save();
    res.status(201).json(newChild);
  } catch (error) {
    next(error);
  }
}

async function updateChild(req, res, next) {
  try {
    const child = await Child.findById(req.params.id);
    child.name = req.body.name || child.name;
    child.age = req.body.age || child.age;
    child.sensoryRating = {
      noise: req.body.sensoryRating.noise || child.sensoryRating.noise,
      light: req.body.sensoryRating.light || child.sensoryRating.light,
      crowds: req.body.sensoryRating.crowds || child.sensoryRating.crowds,
    };
    await child.save();
    res.status(200).json(child);
  } catch (error) {
    next(error);
  }
}

async function deleteChild(req, res, next) {
  try {
    const { id } = req.params;
    const deletedChild = await Child.findByIdAndDelete(id);
    res.status(200).json(deletedChild);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getChild,
  getChildById,
  newChild,
  updateChild,
  deleteChild,
};
