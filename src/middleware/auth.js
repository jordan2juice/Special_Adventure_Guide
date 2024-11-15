"use strict";

const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .send({ error: "Access denied. No token provided." });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.role = decoded;
    next();
  } catch (error) {
    next(error);
  }
}
