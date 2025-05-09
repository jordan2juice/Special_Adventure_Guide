"use strict";

const signToken = require("../middleware/loginMiddle");
const User = require("../modals/User");

async function registerUser(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    next(error);
  }
}

async function loginUser(req, res, next) {
  res.status(200).json({ token: req.token, user: req.user });
}

async function getUser(req, res, next) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  getUserById,
  getUser,
  deleteUser,
};
