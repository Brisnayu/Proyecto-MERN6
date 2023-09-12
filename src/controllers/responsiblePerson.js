const responsiblePersonData = require("../data/mock-responsiblePerson");
const ResponsiblePerson = require("../models/responsiblePerson");
const {
  getAllResponsiblePersonsFromDB,
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

const updateResponsiblePerson = async (req, res) => {
  const { id } = req.params;
  const newResponsiblePerson = new ResponsiblePerson(req.body);

  newResponsiblePerson._id = id;

  const updatePerson = await updateResponsiblePersonFromDB(id, newResponsiblePerson);
  return res.status(200).json({ data: updatePerson });
};

const deleteResponsiblePerson = async (req, res) => {
  const { id } = req.params;
  deleteResponsiblePersonByIdFromDB(id);
  res.status(200).json({ data: "Eliminado correctamente! 😼" });
};

module.exports = {
  reloadResponsiblePerson,
  getAllResponsiblePersons,
  updateResponsiblePerson,
  deleteResponsiblePerson,
};
