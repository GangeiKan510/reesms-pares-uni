import mongoose from "mongoose";

const hazardSchema = new mongoose.Schema({
  title: String,
  description: String
});

const Hazard = mongoose.model('Hazard', hazardSchema);

export { Hazard };