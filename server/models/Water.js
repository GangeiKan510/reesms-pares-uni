import mongoose from "mongoose";

const waterSchema = new mongoose.Schema({
  title: String,
  totalBill: Number
});

const Water = mongoose.model('Water', waterSchema);

export { Water };