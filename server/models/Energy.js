import mongoose from "mongoose";

const energySchema = new mongoose.Schema({
  title: String,
  totalBill: Number
});

const Energy = mongoose.model('Energy', energySchema);

export { Energy };