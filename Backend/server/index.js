const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config({ path: "./server/.env" });
console.log("STRIPE KEY:", process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://bloodops-client.vercel.app"
    ],
    credentials: true,
  })
);
app.use(express.json());


// DB
connectDB();

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/user"));
app.use("/api/donation-requests", require("./routes/donationRequests"));
app.use("/api/admin", adminRoutes);
app.use("/api/funding", require("./routes/fundingRoutes"));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;