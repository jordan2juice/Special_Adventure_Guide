"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const mongooseConnect = require("./database");
const { errorHandling, notFound } = require("./src/middleware/error");
const baseRouter = require("./src/routes/baseRoutes");
const park = require("./src/routes/parkRoutes");
const { checkEmail, checkPassword } = require("./src/middleware/loginMiddle");

app.use(cors());
app.use(express.json());



mongooseConnect().catch((error) => {
  console.log(error);
});

// Routes
app.use(baseRouter);
app.use(park);

// Middleware
  app.use(checkEmail);
  app.use(checkPassword)

// Error Handling - Middleware
app.use(errorHandling);
app.use(notFound);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

