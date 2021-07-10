import { addJob, deleteJob } from "../config/jobScheduler.js";

const addJobSchedule = async (req, res, next) => {
  const { name, duration, message } = req.body;

  await addJob(req.body);
  res.json({
    message: "Added Job Successfully!",
  });
};

const deleteJobSchedule = async (req, res, next) => {
  const id = req.params.id;
  await deleteJob(id);
  res.json({
    message: "Deleted Job Successfully!",
    id: id,
  });
};

export { addJobSchedule,deleteJobSchedule };
