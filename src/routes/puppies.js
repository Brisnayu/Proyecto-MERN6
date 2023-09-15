const express = require("express");
const {
  getAllPuppies,
  getPuppyById,
  createPuppy,
  updatePuppyById,
  deletePuppynById,
  reloadPuppies,
} = require("../controllers/puppies");

const puppiesRouters = express.Router();

puppiesRouters.post("/reload", reloadPuppies);
puppiesRouters.get("/", getAllPuppies);
puppiesRouters.get("/:id", getPuppyById);
puppiesRouters.post("/", createPuppy);
puppiesRouters.put("/:id", updatePuppyById);
puppiesRouters.delete("/:id", deletePuppynById);

module.exports = puppiesRouters;
