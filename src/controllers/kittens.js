const kittensData = require("../data/mock-kittens");
const Kitten = require("../models/kitten");
const {
  getAllPetsFromDB,
  getPetByIdFromDB,
  createPetInDB,
  updatePetByIdInDB,
  deletePetByIdInDB,
} = require("../repositories/pets");

const Model = Kitten;

const reloadKittens = async (req, res) => {
  try {
    await Kitten.collection.drop();
    const newKittens = await Kitten.insertMany(kittensData);
    return res.status(200).json({ data: newKittens });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getAllKittens = async (req, res) => {
  try {
    const { filter } = req.query;
    const kittens = await getAllPetsFromDB(filter, Model);
    return res.status(200).json({ data: kittens });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getKittenById = async (req, res) => {
  try {
    const { id } = req.params;
    const kitten = await getPetByIdFromDB(id, Model);
    return res.status(200).json({ data: kitten });
  } catch (error) {
    console.log("El id es inválido, debes verificarlo 😿:", error);
    return res.status(404).json({
      data: "Lo siento, pero el valor ingresado es incorrecto. Por favor, realice una verificación rápida 😬!",
    });
  }
};

const createKitten = async (req, res) => {
  try {
    const newKitten = await createPetInDB(req.body, Model);
    return res.status(201).json({ data: newKitten });
  } catch (error) {
    console.log("Lo siento! No se ha creado el gatito correctamente 😿", error);
    return res.status(500).json({ data: error.message });
  }
};

const updateKittenById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateKitten = await updatePetByIdInDB(id, req.body, Model);
    return res.status(200).json({ data: updateKitten });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const deleteKittenById = async (req, res) => {
  try {
    const { id } = req.params;
    deletePetByIdInDB(id, Model);
    return res.status(200).json({ data: "Eliminado correctamente! 😼" });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

module.exports = {
  reloadKittens,
  getAllKittens,
  getKittenById,
  createKitten,
  updateKittenById,
  deleteKittenById,
};
