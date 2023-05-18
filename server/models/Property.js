import mongoose from "mongoose";

import { sustainabilityFeatureSchema } from "./features/SustainabilityFeature.js";
import { managerSchema } from "./Manager.js";

const propertySchema = new mongoose.Schema({

  name: {type: String, required: true, unique: true},
  location: {type: String, required: true, unique: true},
  email: {type: String, required: true},
  facebookPage: {type: String, required: true},
  instagramProfile: {type: String, required: true},
  twitterProfile: {type: String, required: true},
  description: {type: String, required: true},
  manager: {type: managerSchema, required: true},
  sustainabilityFeature: { type: sustainabilityFeatureSchema, required: true}

});

const Property = mongoose.model('Property', propertySchema);

export { Property };