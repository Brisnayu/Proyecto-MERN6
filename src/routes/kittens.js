const express = require("express");
const {
  getAllKittens,
  getKittenById,
  createKitten,
  updateKittenById,
  deleteKittenById,
} = require("../controllers/kittens");

const kittensRouters = express.Router();

kittensRouters.get("/", getAllKittens);
kittensRouters.get("/:id", getKittenById);
kittensRouters.post("/", createKitten);
kittensRouters.put("/:id", updateKittenById);
kittensRouters.delete("/:id", deleteKittenById);

module.exports = kittensRouters;
