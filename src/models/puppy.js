const mongoose = require("mongoose");

const puppySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    images: { type: [String], trim: true },
    race: { type: String, required: true, trim: true },
    color: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    responsiblePerson: { type: mongoose.Types.ObjectId, ref: "ResponsiblePerson" },
  },
  {
    collection: "puppies",
  },
);

const Puppy = mongoose.model("Puppy", puppySchema, "puppies");

module.exports = Puppy;
