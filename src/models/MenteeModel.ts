import mongoose from "mongoose";
import { Mentee } from "../schemas/MenteeZodSchema";

const menteeSchema = new mongoose.Schema<Mentee>({
  name: { type: String, required: true },
  emailId: { type: String, required: true },
  mobileNo: { type: String, required: true, length: 10 },
  profession: { type: String, required: true },
  subcategoryProfession: { type: String, required: true },
  currentWorkingJob: String,
  company: String,
  summaryAbout: { type: String, required: true },
  userDetails: {
    age: Number,
    gender: { type: String, enum: ["male", "female", "other"] },
    linkedInProfile: String,
  },
  walletBalance: { type: Number, required: true, min: 500 },
});

export const MenteeModel = mongoose.model<Mentee>("Mentee", menteeSchema);
