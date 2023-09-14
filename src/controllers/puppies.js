const puppiesData = require("../data/mock-puppies");
const Puppy = require("../models/puppy");
const {
  getAllPetsFromDB,
  getPetByIdFromDB,
  createPetInDB,
  updatePetByIdInDB,
  deletePetByIdInDB,
} = require("../repositories/pets");

const Model = Puppy;

const reloadPuppies = async (req, res) => {
  try {
    await Puppy.collection.drop();
    const newPuppies = await Puppy.insertMany(puppiesData);
    return res.status(200).json({ data: newPuppies });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getAllPuppies = async (req, res) => {
  try {
    const { filter } = req.query;
    const puppies = await getAllPetsFromDB(filter, Model);
    return res.status(200).json({ data: puppies });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getPuppyById = async (req, res) => {
  try {
    const { id } = req.params;
    const puppy = await getPetByIdFromDB(id, Model);
    return res.status(200).json({ data: puppy });
  } catch (error) {
    console.log("El id es inválido, debes verificarlo 😿:", error);
    return res.status(404).json({
      data: "Lo siento, pero el valor ingresado es incorrecto. Por favor, realice una verificación rápida 😬!",
    });
  }
};

const createPuppy = async (req, res) => {
  try {
    const newPuppy = await createPetInDB(req.body, Model);
    return res.status(201).json({ data: newPuppy });
  } catch (error) {
    console.log("Lo siento! No se ha creado el gatito correctamente 😿", error);
    return res.status(500).json({ data: error.message });
  }
};

const updatePuppyById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateKitten = await updatePetByIdInDB(id, req.body, Model);
    return res.status(200).json({ data: updateKitten });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const deletePuppynById = async (req, res) => {
  try {
    const { id } = req.params;
    deletePetByIdInDB(id, Model);
    return res.status(200).json({ data: "Eliminado correctamente! 😼" });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

module.exports = {
  reloadPuppies,
  getAllPuppies,
  getPuppyById,
  createPuppy,
  updatePuppyById,
  deletePuppynById,
};
