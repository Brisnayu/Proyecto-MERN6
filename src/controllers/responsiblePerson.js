const responsiblePersonData = require("../data/mock-responsiblePerson");
const ResponsiblePerson = require("../models/responsiblePerson");

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

module.exports = {
  reloadResponsiblePerson,
};
