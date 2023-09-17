const responsiblePersonData = require("../data/mock-responsiblePerson");
const ResponsiblePerson = require("../models/responsiblePerson");
const {
  getAllResponsiblePersonsFromDB,
  getResponsiblePersonByIdFromDB,
  createPersonInDB,
  updateResponsiblePersonFromDB,
  updatePetFromResponsiblePersonFromDB,
  deleteResponsiblePersonByIdFromDB,
} = require("../repositories/responsiblePersons");

const reloadResponsiblePerson = async (req, res) => {
  try {
    await ResponsiblePerson.collection.drop();
    const newResponsiblePersons = await ResponsiblePerson.insertMany(
      responsiblePersonData,
    );
    return res.status(200).json({ data: newResponsiblePersons });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getAllResponsiblePersons = async (req, res) => {
  try {
    const responsiblePersons = await getAllResponsiblePersonsFromDB(ResponsiblePerson);
    return res.status(200).json({ data: responsiblePersons });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getResponsiblePersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const responsiblePerson = await getResponsiblePersonByIdFromDB(id, ResponsiblePerson);
    return res.status(200).json({ data: responsiblePerson });
  } catch (error) {
    return res.status(404).json({ data: error });
  }
};

const createNewResponsiblePerson = async (req, res) => {
  try {
    const newPerson = await createPersonInDB(req.body, ResponsiblePerson);
    return res.status(201).json({ data: newPerson });
  } catch (error) {
    console.log("Lo siento! El nuevo cuidador no se ha creado correctamente 😿", error);
    return res.status(500).json({ data: error.message });
  }
};

const updateResponsiblePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const updateResponsiblePerson = await updateResponsiblePersonFromDB(
      id,
      req.body,
      ResponsiblePerson,
    );
    return res.status(200).json({ data: updateResponsiblePerson });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const updatePetFromResponsiblePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const updateResponsiblePerson = await updatePetFromResponsiblePersonFromDB(
      id,
      req.body,
      ResponsiblePerson,
    );

    if (!updateResponsiblePerson) {
      return res.status(404).json({ data: "Id inválido! ❌" });
    }

    return res.status(200).json({ data: updateResponsiblePerson });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const deleteResponsiblePerson = async (req, res) => {
  try {
    const { id } = req.params;
    deleteResponsiblePersonByIdFromDB(id, ResponsiblePerson);
    return res.status(200).json({ data: "Eliminado correctamente! 😼" });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

module.exports = {
  reloadResponsiblePerson,
  getAllResponsiblePersons,
  getResponsiblePersonById,
  createNewResponsiblePerson,
  updateResponsiblePerson,
  updatePetFromResponsiblePerson,
  deleteResponsiblePerson,
};
