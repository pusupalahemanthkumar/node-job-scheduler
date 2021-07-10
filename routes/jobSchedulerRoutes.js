// Importing required files and packages here
import express from "express";
import {
  addJobSchedule,
  deleteJobSchedule,
} from "../controllers/jobSchedulerController.js";

const router = express.Router();

router.post("/add-job", addJobSchedule);
router.get("/delete-job/:id", deleteJobSchedule);

export default router;
