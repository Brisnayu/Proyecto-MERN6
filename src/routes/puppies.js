const express = require("express");
const {
  getAllPuppies,
  getPuppyById,
  createPuppy,
  updatePuppyById,
  deletePuppynById,
} = require("../controllers/puppies");
const Puppy = require("../models/puppy");
const arrayFicticioPerros = require("../data/mock-puppies");

const puppiesRouters = express.Router();

puppiesRouters.get("/", getAllPuppies);
puppiesRouters.get("/:id", getPuppyById);
puppiesRouters.post("/", createPuppy);
puppiesRouters.put("/:id", updatePuppyById);
puppiesRouters.delete("/:id", deletePuppynById);

puppiesRouters.post("/reload", async (req, res) => {
  try {
    await Puppy.collection.drop();
    const newPuppiesArray = await Puppy.insertMany(arrayFicticioPerros);
    return res.status(200).json({ data: newPuppiesArray });
  } catch (error) {
    console.log("Algo no ha salido bien ❌ en routers puppies");
  }
});

// puppiesRouters.get("/populate/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const puppy = await Puppy.findById(id).populate({
//       path: "responsiblePerson",
//       select: "name surname avatar age",
//     });
//     return res.status(200).json(puppy);
//   } catch (error) {
//     return res.status(400).json("error", error);
//   }
// });

module.exports = puppiesRouters;
