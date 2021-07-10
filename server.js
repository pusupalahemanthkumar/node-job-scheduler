// Importing required files and packages here
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { initJobScheduler, addJob } from "./config/jobScheduler.js";
import jobRoutes from "./routes/jobSchedulerRoutes.js";
// Getting environment variables here
dotenv.config();

// Initialzing
await connectDB();
await initJobScheduler();
const app = express();

app.use(express.json());
app.get("/", (req, res, next) => {
  res.send("Welcome To Node Job Scheduler!");
});
app.use("/api/jobscheduler", jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Start At Port Number : ${PORT}`.green.underline.bold);
});
