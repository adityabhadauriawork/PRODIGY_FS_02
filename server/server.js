const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://prodigy-fs-02-azure.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Employee Management API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});