const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config({ path: "./server/.env" });

const app = express();

app.use(cors());
app.use(express.json());


// DB
connectDB();

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/user"));
app.use("/api/donation-requests", require("./routes/donationRequests"));
app.use("/api/admin", adminRoutes);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});