const mongoose = require("mongoose");

const responsiblePerson = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    avatar: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    pets: {
      puppies: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Puppy",
        },
      ],
      kittens: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Kitten",
        },
      ],
    },
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
