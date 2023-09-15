const getAllResponsiblePersonsFromDB = async (Model) => {
  const responsiblePersons = await Model.find().populate("puppy").populate("kitten");
  return responsiblePersons;
};

const getResponsiblePersonByIdFromDB = async (id, Model) => {
  const responsiblePerson = await Model.findById(id);
  return responsiblePerson;
};

const createPersonInDB = async (payload, Model) => {
  const newPerson = new Model(payload);
  await newPerson.save();

  return newPerson;
};

const updateResponsiblePersonFromDB = async (id, payload, Model) => {
  const responsiblePerson = await Model.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return responsiblePerson;
};

const updatePetFromResponsiblePersonFromDB = async (id, payload, Model) => {
  const update = {};

  update.$addToSet = {
    "pets.puppies": { $each: payload.pets.puppies || [] },
    "pets.kittens": { $each: payload.pets.kittens || [] },
  };

  const responsiblePerson = await Model.findByIdAndUpdate(id, update, { new: true });
  return responsiblePerson;
};

const deleteResponsiblePersonByIdFromDB = async (id, Model) => {
  await Model.deleteOne({ _id: id });
};

module.exports = {
  getAllResponsiblePersonsFromDB,
  getResponsiblePersonByIdFromDB,
  createPersonInDB,
  updateResponsiblePersonFromDB,
  updatePetFromResponsiblePersonFromDB,
  deleteResponsiblePersonByIdFromDB,
};
