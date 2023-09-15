const express = require("express");

const {
  getAllInformationResponsiblePerson,
  getAllInformationKitten,
  getAllInformationPuppy,
  updatePetByIdFromResponsiblePerson,
  getAllInformationPersonsAndPets,
} = require("../controllers/relatedModels");

const relatedModelsRouters = express.Router();

relatedModelsRouters.get("/responsibleperson", getAllInformationPersonsAndPets);
relatedModelsRouters.get("/responsibleperson/:id", getAllInformationResponsiblePerson);
relatedModelsRouters.get("/kitten/:id", getAllInformationKitten);
relatedModelsRouters.get("/puppy/:id", getAllInformationPuppy);
relatedModelsRouters.put("/responsiblePerson/:id", updatePetByIdFromResponsiblePerson);

module.exports = relatedModelsRouters;
