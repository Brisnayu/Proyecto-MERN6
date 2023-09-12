const ResponsiblePerson = require("../models/responsiblePerson");

const getAllResponsiblePersonsFromDB = async () => {
  console.log("Estoy llegando hasta el repositorio de puppies");
  const responsiblePersons = await ResponsiblePerson.find()
    .populate("puppy")
    .populate("kitten");
  return responsiblePersons;
};

const updateResponsiblePersonFromDB = async (id, payload) => {
  const responsiblePerson = await ResponsiblePerson.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return responsiblePerson;
};

const deleteResponsiblePersonByIdFromDB = async (id) => {
  await ResponsiblePerson.deleteOne({ _id: id });
};

module.exports = {
  getAllResponsiblePersonsFromDB,
  updateResponsiblePersonFromDB,
  deleteResponsiblePersonByIdFromDB,
};
