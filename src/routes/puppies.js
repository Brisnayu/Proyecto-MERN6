const express = require("express");
const { getAllPuppies } = require("../controllers/puppies");

const puppiesRouters = express.Router();

puppiesRouters.get("/", getAllPuppies);

module.exports = puppiesRouters;
