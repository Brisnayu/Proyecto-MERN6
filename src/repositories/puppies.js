const Puppy = require("../models/puppy");

const getAllPuppiesFromDB = async (filter) => {
  const filterOptions = {
    $or: [
      { name: { $regex: new RegExp(filter, "i") } },
      { race: { $regex: new RegExp(filter, "i") } },
      { color: { $regex: new RegExp(filter, "i") } },
      { responsiblePerson: { $regex: new RegExp(filter, "i") } },
    ],
  };

  console.log("Estoy llegando hasta el repositorio de puppies");
  const puppies = await Puppy.find(filter ? filterOptions : {});
  return puppies;
};

const getPuppyByIdFromDB = async (id) => {
  const puppies = await Puppy.findById(id);
  return puppies;
};

const createPuppyInDB = async (payload) => {
  const newPuppy = new Puppy(payload);
  await newPuppy.save();

  console.log("Estoy llegando hasta FROM DB");
  return newPuppy;
};

const updatePuppyByIdInDB = async (id, payload) => {
  const puppy = await Puppy.findByIdAndUpdate(id, payload, { new: true });
  return puppy;
};

const deletePuppyByIdInDB = async (id) => {
  await Puppy.deleteOne({ _id: id });
};

module.exports = {
  getAllPuppiesFromDB,
  getPuppyByIdFromDB,
  createPuppyInDB,
  updatePuppyByIdInDB,
  deletePuppyByIdInDB,
};
