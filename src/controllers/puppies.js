const { getAllPuppiesFromDB } = require("../repositories/puppies");

const getAllPuppies = async (req, res) => {
  const { filter } = req.query;
  const puppies = await getAllPuppiesFromDB(filter);

  console.log("Estoy llegando hasta controllers puppies");
  res.status(200).json({ data: puppies });
};

module.exports = {
  getAllPuppies,
};
