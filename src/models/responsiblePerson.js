const mongoose = require("mongoose");

const responsiblePerson = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    avatar: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    responsiblePet: [
      {
        type: mongoose.Types.ObjectId,
        //   required: true,
        trim: true,
        ref: "kittens",
      },
      {
        type: mongoose.Types.ObjectId,
        //   required: true,
        trim: true,
        ref: "puppies",
      },
    ],
  },
  {
    collection: "responsiblePerson",
  },
);

const ResponsiblePerson = mongoose.model(
  "ResponsiblePerson",
  responsiblePerson,
  "responsiblePerson",
);

module.exports = ResponsiblePerson;
