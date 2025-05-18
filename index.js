"use strict";

const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const mongooseConnect = require("./database");
const { errorHandling, notFound } = require("./src/middleware/error");
const baseRouter = require("./src/routes/baseRoutes");
const park = require("./src/routes/parkRoutes");
const attraction = require("./src/routes/attractionRoutes");
const child = require("./src/routes/childRoutes");
// const { checkEmail, checkPassword, signToken } = require("./src/middleware/loginMiddle");

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongooseConnect().then(() => {
  console.log("Connected to MongoDB");
});

// Routes
app.use(baseRouter);
app.use(park);
app.use(attraction);
app.use(child);

// Middleware
// app.use(checkEmail);
// app.use(checkPassword)
// app.use(signToken);

// Error Handling - Middleware
app.use(errorHandling);
app.use(notFound);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
