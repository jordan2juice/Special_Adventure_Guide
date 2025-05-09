"use strict";

const { storage } = require("../../image");

const multer = require("multer");

const upload = multer({ storage });

const uploadMiddleware = (req, res, next) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      return res.status(400).send("Error uploading file");
    }
    next();
  });
};

module.exports = { uploadMiddleware };
