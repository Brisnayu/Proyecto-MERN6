const mongoose = require("mongoose");

const kittenSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    images: { type: [String], required: true, trim: true },
    race: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    responsiblePerson: { type: mongoose.Types.ObjectId, ref: "ResponsiblePerson" },
  },
  { collection: "kittens" },
);

const Kitten = mongoose.model("Kitten", kittenSchema, "kittens");

module.exports = Kitten;
