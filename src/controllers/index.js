"use strict";

function home(req, res, next) {
  res.send("Welcome to Special Adventure Guide!");
}

module.exports = { home };
