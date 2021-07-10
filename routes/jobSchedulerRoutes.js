// Importing required files and packages here
import express from "express";
import { addJob, deleteJob } from "../config/jobScheduler.js";

const router = express.Router();

router.post("/add-job", async (req, res, next) => {
  const { name, duration, message } = req.body;

  await addJob(req.body);
  res.json({
    message: "Added Job Successfully!",
  });
});
router.get("/delete-job/:id", async (req, res, next) => {
  const id = req.params.id;
  await deleteJob(id);
  res.json({
    message: "Deleted Job Successfully!",
    id: id,
  });
});

export default router;
