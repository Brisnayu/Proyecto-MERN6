require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db");

const responsiblePersonRouters = require("./routes/responsiblePerson");
const puppiesRouters = require("./routes/puppies");
const kittensRouters = require("./routes/kittens");
// const mainRouter = require("./routes");

const app = express();

app.use(express.json());
connectDB();

app.use("/api/v1/responsiblepersons", responsiblePersonRouters);
app.use("/api/v1/puppies", puppiesRouters);
app.use("/api/v1/kittens", kittensRouters);

const PORT = 4001;

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
