const responsiblePersonData = require("../data/mock-responsiblePerson");
const ResponsiblePerson = require("../models/responsiblePerson");
const {
  getAllResponsiblePersonsFromDB,
  getResponsiblePersonByIdFromDB,
  createPersonInDB,
  updateResponsiblePersonFromDB,
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
    console.log("Algo no ha salido bien");
  }
};

const getAllResponsiblePersons = async (req, res) => {
  const responsiblePersons = await getAllResponsiblePersonsFromDB();

  res.status(200).json({ data: responsiblePersons });
};

const getResponsiblePersonById = async (req, res) => {
  const { id } = req.params;

  try {
    const responsiblePerson = await getResponsiblePersonByIdFromDB(id);
    res.status(200).json({ data: responsiblePerson });
  } catch (error) {
    res.status(404).json({ data: error });
  }
};

const createNewResponsiblePerson = async (req, res) => {
  try {
    const newPerson = await createPersonInDB(req.body);
    res.status(200).json({ data: newPerson });
  } catch (error) {
    console.log("Lo siento! El nuevo cuidador no se ha creado correctamente 😿", error);
    res.status(500).json({ data: error.message });
  }
};

const updateResponsiblePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const newPerson = req.body;

    const updateResponsiblePerson = await updateResponsiblePersonFromDB(id, newPerson);

    if (!updateResponsiblePerson) {
      return res.status(404).json({ data: "Id inválido! ❌" });
    }

    return res.status(200).json({ data: updateResponsiblePerson });
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const deleteResponsiblePerson = async (req, res) => {
  const { id } = req.params;
  deleteResponsiblePersonByIdFromDB(id);
  res.status(200).json({ data: "Eliminado correctamente! 😼" });
};

module.exports = {
  reloadResponsiblePerson,
  getAllResponsiblePersons,
  getResponsiblePersonById,
  createNewResponsiblePerson,
  updateResponsiblePerson,
  deleteResponsiblePerson,
};
