const getAllInformationResponsiblePersonFromDB = async (id, Model) => {
  const person = await Model.findById(id)
    .populate("pets.puppies")
    .populate("pets.kittens");

  return person;
};

const getAllInformationPetFromDB = async (id, Model) => {
  const pet = await Model.findById(id).populate({
    path: "responsiblePerson",
    select: "name surname avatar age",
  });

  return pet;
};

const removePetFromDB = async (id, payload, Model) => {
  const person = Model.findByIdAndUpdate(id, payload, { new: true });

  return person;
};

module.exports = {
  getAllInformationResponsiblePersonFromDB,
  getAllInformationPetFromDB,
  removePetFromDB,
};
