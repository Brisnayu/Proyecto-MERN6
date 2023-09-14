const express = require("express");
const {
  reloadResponsiblePerson,
  getAllResponsiblePersons,
  getResponsiblePersonById,
  createNewResponsiblePerson,
  updateResponsiblePerson,
  updatePetFromResponsiblePerson,
  deleteResponsiblePerson,
} = require("../controllers/responsiblePerson");

const responsiblePersonRouters = express.Router();

responsiblePersonRouters.post("/reload", reloadResponsiblePerson);
responsiblePersonRouters.get("/", getAllResponsiblePersons);
responsiblePersonRouters.get("/:id", getResponsiblePersonById);
responsiblePersonRouters.post("/", createNewResponsiblePerson);
responsiblePersonRouters.put("/:id", updateResponsiblePerson);
responsiblePersonRouters.put("/pet/:id", updatePetFromResponsiblePerson);
responsiblePersonRouters.delete("/:id", deleteResponsiblePerson);

module.exports = responsiblePersonRouters;
