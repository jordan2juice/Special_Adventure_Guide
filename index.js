"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const mongooseConnect = require("./database");
const { errorHandling, notFound } = require("./src/middleware/error");

app.use(cors());
app.use(express.json());

mongooseConnect().catch((error) => {
  console.log(error);
});

app.use(errorHandling);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
