const getAllPetsFromDB = async (filter, Model) => {
  const filterOptions = {
    $or: [
      { name: { $regex: new RegExp(filter, "i") } },
      { race: { $regex: new RegExp(filter, "i") } },
      { color: { $regex: new RegExp(filter, "i") } },
      { responsiblePerson: { $regex: new RegExp(filter, "i") } },
    ],
  };

  const pets = await Model.find(filter ? filterOptions : {});
  return pets;
};

const getPetByIdFromDB = async (id, Model) => {
  const pet = await Model.findById(id);
  return pet;
};

const createPetInDB = async (payload, Model) => {
  const newPet = new Model(payload);
  await newPet.save();

  return newPet;
};

const updatePetByIdInDB = async (id, payload, Model) => {
  const pet = await Model.findByIdAndUpdate(id, payload, { new: true });
  return pet;
};

const deletePetByIdInDB = async (id, Model) => {
  await Model.deleteOne({ _id: id });
};

module.exports = {
  getAllPetsFromDB,
  getPetByIdFromDB,
  createPetInDB,
  updatePetByIdInDB,
  deletePetByIdInDB,
};
