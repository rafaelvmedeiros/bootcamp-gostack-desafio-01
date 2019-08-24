const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { logRequests } = require("./middlewares");

app.use(logRequests);
app.use(cors());
app.use(bodyParser.json());
app.use(require("./routes"));

module.exports = app;
