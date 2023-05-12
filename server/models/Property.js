import mongoose from "mongoose";

import { Hazard } from "./Hazard.js";
import { Energy } from "./Energy.js";
import { Water } from "./Water.js";

const propertySchema = new mongoose.Schema({
  name: String,
  location: String,
  hazardDetails: Hazard,
  energyDetails: Energy,
  waterDetails: Water
});

const Property = mongoose.model('Property', propertySchema);

export { Property };