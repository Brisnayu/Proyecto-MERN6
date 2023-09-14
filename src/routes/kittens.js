const express = require("express");
const {
  getAllKittens,
  getKittenById,
  createKitten,
  updateKittenById,
  deleteKittenById,
  reloadKittens,
} = require("../controllers/kittens");

const kittensRouters = express.Router();

kittensRouters.post("/reload", reloadKittens);
kittensRouters.get("/", getAllKittens);
kittensRouters.get("/:id", getKittenById);
kittensRouters.post("/", createKitten);
kittensRouters.put("/:id", updateKittenById);
kittensRouters.delete("/:id", deleteKittenById);

module.exports = kittensRouters;
