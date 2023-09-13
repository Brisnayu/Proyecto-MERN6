const express = require("express");
const kittensRouters = require("./kittens");
const puppiesRouters = require("./puppies");
const responsiblePersonRouters = require("./responsiblePerson");

const router = express.Router();

router.use("/kittens", kittensRouters);
router.use("/puppies", puppiesRouters);
router.use("/responsiblepersons", responsiblePersonRouters);

module.exports = router;
