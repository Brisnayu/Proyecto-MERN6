require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/db");
const rateLimit = require("express-rate-limit");
const mainRouter = require("./routes");

const app = express();

app.use(express.json());
connectDB();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: false,
  legacyHeaders: false,
});

app.use(limiter);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.disable("x-powered-by");

app.use("/api/v1", mainRouter);

app.use("*", (req, res) => {
  res.status(404).json({ data: "Not found 🙀" });
});

app.use((error, req, res) => {
  console.log(">>>>> Server error, verifica que ha pasado:", error);
  res.status(500).json({ data: "Internal Server Error" });
});

const PORT = Number(process.env.PORT);
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});
