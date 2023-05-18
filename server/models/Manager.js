import mongoose from "mongoose";

const managerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  telNumber: {type: String, required: true},
  mobileNumber: {type: Number, required: true},
  address: {type: String, required: true}
});

const Manager = mongoose.model('Manager', managerSchema);

export { Manager, managerSchema };