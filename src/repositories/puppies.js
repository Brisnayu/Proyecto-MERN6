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

module.exports = {
  getAllPuppiesFromDB,
};
