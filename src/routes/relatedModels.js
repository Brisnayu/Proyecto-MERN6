const express = require("express");
const Kitten = require("../models/kitten");
const Puppy = require("../models/puppy");
const ResponsiblePerson = require("../models/responsiblePerson");

const relatedModelsRouters = express.Router();

relatedModelsRouters.get("/responsiblePerson/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const person = await ResponsiblePerson.findById(id)
      .populate("pets.puppies")
      .populate("pets.kittens");

    return res.status(200).json(person);
  } catch (error) {
    return res.status(400).json("error", error);
  }
});

relatedModelsRouters.get("/kitten/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const kitten = await Kitten.findById(id).populate({
      path: "responsiblePerson",
      select: "name surname avatar age",
    });
    return res.status(200).json({ data: kitten });
  } catch (error) {
    return res.status(400).json("error", error);
  }
});

relatedModelsRouters.get("/puppy/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const puppy = await Puppy.findById(id).populate({
      path: "responsiblePerson",
      select: "name surname avatar age",
    });
    return res.status(200).json(puppy);
  } catch (error) {
    return res.status(400).json("error", error);
  }
});

relatedModelsRouters.put("/kitten/:id", async (req, res) => {
  const { id } = req.params;

  const kitten = await Kitten.findByIdAndUpdate(id, req.body, { new: true });
  return res.status(200).json({ data: kitten });
});

relatedModelsRouters.put("/puppy/:id", async (req, res) => {
  const { id } = req.params;

  const kitten = await Puppy.findByIdAndUpdate(id, req.body, { new: true });
  return res.status(200).json({ data: kitten });
});

module.exports = relatedModelsRouters;
