const Puppy = require("../models/puppy");
const {
  getAllPuppiesFromDB,
  getPuppyByIdFromDB,
  createPuppyInDB,
  updatePuppyByIdInDB,
  deletePuppyByIdInDB,
} = require("../repositories/puppies");

const getAllPuppies = async (req, res) => {
  const { filter } = req.query;
  const puppies = await getAllPuppiesFromDB(filter);

  console.log("Estoy llegando hasta controllers puppies 😀");
  res.status(200).json({ data: puppies });
};

const getPuppyById = async (req, res) => {
  const { id } = req.params;
  try {
    const puppy = await getPuppyByIdFromDB(id);
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
    const newPuppy = await createPuppyInDB(req.body);
    console.log("ESTOY LLEGANDO HASTA CREAR");
    res.status(201).json({ data: newPuppy });
  } catch (error) {
    console.log("Lo siento! No se ha creado el gatito correctamente 😿", error);
    res.status(500).json({ data: error.message });
  }
};

const updatePuppyById = async (req, res) => {
  const { id } = req.params;
  const newPuppy = new Puppy(req.body);
  newPuppy._id = id;

  const updateKitten = await updatePuppyByIdInDB(id, newPuppy);
  return res.status(200).json({ data: updateKitten });
};

const deletePuppynById = async (req, res) => {
  const { id } = req.params;
  deletePuppyByIdInDB(id);
  res.status(200).json({ data: "Eliminado correctamente! 😼" });
};

module.exports = {
  getAllPuppies,
  getPuppyById,
  createPuppy,
  updatePuppyById,
  deletePuppynById,
};
