const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config({ path: "./server/.env" });

const app = express();

app.use(cors());
app.use(express.json());

// DB
connectDB();

// routes
app.use("/api/auth", require("./routes/auth"));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});