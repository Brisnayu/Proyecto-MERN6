const express = require("express");
const { reloadResponsiblePerson } = require("../controllers/responsiblePerson");
const responsiblePersonRouters = express.Router();

responsiblePersonRouters.post("/reload", reloadResponsiblePerson);

module.exports = responsiblePersonRouters;
