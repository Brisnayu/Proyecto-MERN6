const express = require("express");
const Kitten = require("../models/kitten");

const router = express.Router();

router.get("/kittens", async (req, res) => {
  const { filter } = req.query;

  const filterOptions = {
    $or: [
      { name: { $regex: new RegExp(filter, "i") } },
      { race: { $regex: new RegExp(filter, "i") } },
      { color: { $regex: new RegExp(filter, "i") } },
      { responsiblePerson: { $regex: new RegExp(filter, "i") } },
    ],
  };

  const kittens = await Kitten.find(filter ? filterOptions : {});

  res.status(200).json({ data: kittens });
});
