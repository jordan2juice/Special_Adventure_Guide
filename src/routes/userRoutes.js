"use strict";

const express = require("express");
const userRoutes = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  deleteUser,
  updateUser,
  getUserById,
} = require("../controllers/UserControllers");
const auth = require("../middleware/auth");
const {
  checkEmail,
  checkPassword,
  signToken,
} = require("../middleware/loginMiddle");

userRoutes.route("/register").post(registerUser);
userRoutes
  .route("/login")
  .post(checkEmail, checkPassword, signToken, loginUser);
userRoutes.route("/").get(auth, getUser);
userRoutes.route("/:id").get(getUserById);
userRoutes.route("/:").put(updateUser);
userRoutes.route("/:id").delete(deleteUser);

module.exports = userRoutes;
