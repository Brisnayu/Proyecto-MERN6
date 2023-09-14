const express = require("express");

const {
  getAllInformationResponsiblePerson,
  getAllInformationKitten,
  getAllInformationPuppy,
  // updatePuppyAndKittenByIdFromResponsiblePerson,
  getAllInformationPersonsAndPets,
} = require("../controllers/relatedModels");
const ResponsiblePerson = require("../models/responsiblePerson");

const relatedModelsRouters = express.Router();

relatedModelsRouters.get("/responsibleperson", getAllInformationPersonsAndPets);
relatedModelsRouters.get("/responsibleperson/:id", getAllInformationResponsiblePerson);
relatedModelsRouters.get("/kitten/:id", getAllInformationKitten);
relatedModelsRouters.get("/puppy/:id", getAllInformationPuppy);
relatedModelsRouters.delete("/responsiblePerson/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const puppyIdToRemove = req.body.pets.puppies;

    const update = {
      $pull: {
        "pets.puppies": puppyIdToRemove,
      },
    };

    const result = await ResponsiblePerson.findByIdAndUpdate(id, update, { new: true });
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ data: error.message });
  }
});

module.exports = relatedModelsRouters;
