const express = require("express");
const {
  reloadResponsiblePerson,
  getAllResponsiblePersons,
  getResponsiblePersonById,
  createNewResponsiblePerson,
  updateResponsiblePerson,
  deleteResponsiblePerson,
} = require("../controllers/responsiblePerson");
const ResponsiblePerson = require("../models/responsiblePerson");

const responsiblePersonRouters = express.Router();

responsiblePersonRouters.post("/reload", reloadResponsiblePerson);
responsiblePersonRouters.get("/", getAllResponsiblePersons);
responsiblePersonRouters.get("/:id", getResponsiblePersonById);
responsiblePersonRouters.post("/", createNewResponsiblePerson);
responsiblePersonRouters.put("/:id", updateResponsiblePerson);
responsiblePersonRouters.delete("/:id", deleteResponsiblePerson);

responsiblePersonRouters.get("/populate/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const person = await ResponsiblePerson.findById(id)
      .populate("pets.puppies")
      .populate("pets.kittens");

    return res.status(200).json(person);
  } catch (error) {
    return res.status(400).json("error", error);
  }
});

module.exports = responsiblePersonRouters;
