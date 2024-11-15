"use strict";

const User = require("../modals/User");
const jwt = require("jsonwebtoken");

async function checkEmail(req, res, next) {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).send("Email already exists");
  }
  next();
}

async function checkPassword(req, res, next) {
  try {
    const { password } = req.body;
    const isMatch = await User.isValidPassword(password);
    if (!isMatch) {
      return res.status(400).send("Invalid password");
    }
    next();
  } catch (error) {
    next(error);
  }
}

async function signToken(req, res, next) {
  try {
    const userId = req.user._id;
    const role = req.user.role;
    const token = jwt.sign({ userId, role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    req.token = token;
  } catch (error) {
    next(error);
  }
}

module.exports = { checkEmail, checkPassword, signToken };
