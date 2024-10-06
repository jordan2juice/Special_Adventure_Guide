"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const mongooseConnect = require("./database");
const { errorHandling, notFound } = require("./src/middleware/error");
const baseRouter = require("./src/routes/baseRoutes");

app.use(cors());
app.use(express.json());

mongooseConnect().catch((error) => {
  console.log(error);
});

// Routes
app.use(baseRouter);

// Error Handling - Middleware
app.use(errorHandling);
app.use(notFound);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
