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
  console.log(payload);
  console.log(Model);
  const update = {};

  if (payload.pets.puppies) {
    update.$pull = {
      "pets.puppies": payload.pets.puppies,
    };
  }

  if (payload.pets.kittens) {
    update.$pull = {
      "pets.kittens": payload.pets.kittens,
    };
  }

  const person = await Model.findByIdAndUpdate(id, update, { new: true });

  return person;
};

module.exports = {
  getAllInformationResponsiblePersonFromDB,
  getAllInformationPetFromDB,
  removePetFromDB,
};
