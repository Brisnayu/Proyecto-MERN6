const Puppy = require("../models/puppy");
const {
  getAllPetsFromDB,
  getPetByIdFromDB,
  createPetInDB,
  updatePetByIdInDB,
  deletePetByIdInDB,
} = require("../repositories/pets");

const Model = Puppy;

const getAllPuppies = async (req, res) => {
  const { filter } = req.query;
  const puppies = await getAllPetsFromDB(filter, Model);

  res.status(200).json({ data: puppies });
};

const getPuppyById = async (req, res) => {
  const { id } = req.params;
  try {
    const puppy = await getPetByIdFromDB(id, Model);
    res.status(200).json({ data: puppy });
  } catch (error) {
    console.log("El id es inválido, debes verificarlo 😿:", error);
    res.status(404).json({
      data: "Lo siento, pero el valor ingresado es incorrecto. Por favor, realice una verificación rápida 😬!",
    });
  }
};

const createPuppy = async (req, res) => {
  try {
    const newPuppy = await createPetInDB(req.body, Model);
    res.status(201).json({ data: newPuppy });
  } catch (error) {
    console.log("Lo siento! No se ha creado el gatito correctamente 😿", error);
    res.status(500).json({ data: error.message });
  }
};

const updatePuppyById = async (req, res) => {
  const { id } = req.params;

  const updateKitten = await updatePetByIdInDB(id, req.body, Model);
  return res.status(200).json({ data: updateKitten });
};

const deletePuppynById = async (req, res) => {
  const { id } = req.params;
  deletePetByIdInDB(id, Model);
  res.status(200).json({ data: "Eliminado correctamente! 😼" });
};

module.exports = {
  getAllPuppies,
  getPuppyById,
  createPuppy,
  updatePuppyById,
  deletePuppynById,
};
