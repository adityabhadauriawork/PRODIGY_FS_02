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

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
    res.send("Employee Management API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});