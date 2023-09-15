const Kitten = require("../models/kitten");
const Puppy = require("../models/puppy");
const ResponsiblePerson = require("../models/responsiblePerson");

const {
  getAllInformationResponsiblePersonFromDB,
  getAllInformationPetFromDB,
  removePetFromDB,
} = require("../repositories/relatedModels");

const getAllInformationPersonsAndPets = async (req, res) => {
  try {
    const person = await ResponsiblePerson.find()
      .populate("pets.puppies")
      .populate("pets.kittens");

    return res.status(200).json({ data: person });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getAllInformationResponsiblePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await getAllInformationResponsiblePersonFromDB(id, ResponsiblePerson);

    return res.status(200).json(person);
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getAllInformationKitten = async (req, res) => {
  try {
    const { id } = req.params;
    const kitten = await getAllInformationPetFromDB(id, Kitten);
    return res.status(200).json({ data: kitten });
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const getAllInformationPuppy = async (req, res) => {
  try {
    const { id } = req.params;
    const puppy = await await getAllInformationPetFromDB(id, Puppy);
    return res.status(200).json(puppy);
  } catch (error) {
    return res.status(500).json({ data: error.message });
  }
};

const updatePetByIdFromResponsiblePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const { puppyIdToRemove, kittenIdToRemove } = req.body;

    const update = {
      $pull: {
        "pets.puppies": puppyIdToRemove,
        "pets.kittens": kittenIdToRemove,
      },
    };

    const person = await removePetFromDB(id, update, ResponsiblePerson);
    res.status(200).json({ data: person });
  } catch (error) {
    res.status(500).json({ data: error.message });
  }
};

module.exports = {
  getAllInformationPersonsAndPets,
  getAllInformationResponsiblePerson,
  getAllInformationKitten,
  getAllInformationPuppy,
  updatePetByIdFromResponsiblePerson,
};
