// Importing required files and packages here
import Agenda from "agenda";

let agenda = null;
const initJobScheduler = async () => {
  agenda = await new Agenda({
    db: { address: process.env.MONGO_URI, collection: "tasks" },
  });
  await agenda.start();
};

const addJob = async (data) => {
  agenda.define(data.name, () => {
    console.log(data.message);
  });
  agenda.every(data.duration, data.name);
};

const deleteJob = async (name) => {
  agenda.cancel({ name: name });
};

export { initJobScheduler, addJob, deleteJob };
