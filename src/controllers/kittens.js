const Kitten = require("../models/kitten");
const {
  getAllPetsFromDB,
  getPetByIdFromDB,
  createPetInDB,
  updatePetByIdInDB,
  deletePetByIdInDB,
} = require("../repositories/pets");

const Model = Kitten;

const getAllKittens = async (req, res) => {
  const { filter } = req.query;
  const kittens = await getAllPetsFromDB(filter, Model);

  res.status(200).json({ data: kittens });
};

const getKittenById = async (req, res) => {
  const { id } = req.params;
  try {
    const kitten = await getPetByIdFromDB(id, Model);
    res.status(200).json({ data: kitten });
  } catch (error) {
    console.log("El id es inválido, debes verificarlo 😿:", error);
    res.status(404).json({
      data: "Lo siento, pero el valor ingresado es incorrecto. Por favor, realice una verificación rápida 😬!",
    });
  }
};

const createKitten = async (req, res) => {
  try {
    const newKitten = await createPetInDB(req.body, Model);
    res.status(201).json({ data: newKitten });
  } catch (error) {
    console.log("Lo siento! No se ha creado el gatito correctamente 😿", error);
    res.status(500).json({ data: error.message });
  }
};

const updateKittenById = async (req, res) => {
  const { id } = req.params;

  const updateKitten = await updatePetByIdInDB(id, req.body, Model);
  return res.status(200).json({ data: updateKitten });
};

const deleteKittenById = async (req, res) => {
  const { id } = req.params;
  deletePetByIdInDB(id, Model);
  res.status(200).json({ data: "Eliminado correctamente! 😼" });
};

module.exports = {
  getAllKittens,
  getKittenById,
  createKitten,
  updateKittenById,
  deleteKittenById,
};
