const express = require("express");
const {
  reloadResponsiblePerson,
  getAllResponsiblePersons,
  updateResponsiblePerson,
  deleteResponsiblePerson,
} = require("../controllers/responsiblePerson");
const ResponsiblePerson = require("../models/responsiblePerson");

const responsiblePersonRouters = express.Router();

responsiblePersonRouters.post("/reload", reloadResponsiblePerson);
responsiblePersonRouters.get("/", getAllResponsiblePersons);
responsiblePersonRouters.put("/:id", updateResponsiblePerson);
responsiblePersonRouters.delete("/:id", deleteResponsiblePerson);

responsiblePersonRouters.get("/populate/:id", async (req, res) => {
  console.log(req.params);
  try {
    const { id } = req.params;
    console.log("intenta pasar por aquí");
    const person = await ResponsiblePerson.findById(id)
      .populate("pets.puppies")
      .populate("pets.kittens");

    return res.status(200).json(person);
  } catch (error) {
    return res.status(400).json("error", error);
  }
});

module.exports = responsiblePersonRouters;
