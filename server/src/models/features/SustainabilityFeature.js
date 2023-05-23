import mongoose from "mongoose";

const sustainabilityFeatureSchema = new mongoose.Schema({

  typeOfRenewableEnergy: {type: String, required: true},
  waterConservationMethod: { type: String, required: true},
  hazardLevel: {type: Number, default: 0},
  hazardDescription: {type: String}

});

const SustainabilityFeature = mongoose.model('SustainabilityFeature', sustainabilityFeatureSchema);

export { SustainabilityFeature, sustainabilityFeatureSchema };