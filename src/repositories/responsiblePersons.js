const ResponsiblePerson = require("../models/responsiblePerson");

const getAllResponsiblePersonsFromDB = async () => {
  const responsiblePersons = await ResponsiblePerson.find()
    .populate("puppy")
    .populate("kitten");
  return responsiblePersons;
};

const getResponsiblePersonByIdFromDB = async (id) => {
  const responsiblePerson = await ResponsiblePerson.findById(id);
  return responsiblePerson;
};

const createPersonInDB = async (payload) => {
  const newPerson = new ResponsiblePerson(payload);
  await newPerson.save();

  return newPerson;
};

const updateResponsiblePersonFromDB = async (id, payload) => {
  const responsiblePerson = await ResponsiblePerson.findByIdAndUpdate(
    id,
    {
      $addToSet: {
        "pets.puppies": { $each: payload.pets.puppies },
        "pets.kittens": { $each: payload.pets.kittens },
      },
    },
    { new: true },
  );
  return responsiblePerson;
};

const deleteResponsiblePersonByIdFromDB = async (id) => {
  await ResponsiblePerson.deleteOne({ _id: id });
};

module.exports = {
  getAllResponsiblePersonsFromDB,
  getResponsiblePersonByIdFromDB,
  createPersonInDB,
  updateResponsiblePersonFromDB,
  deleteResponsiblePersonByIdFromDB,
};
