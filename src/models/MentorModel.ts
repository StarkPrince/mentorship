import mongoose from "mongoose";
import { Mentor } from "../schemas/MentorZodSchema";

const mentorSchema = new mongoose.Schema<Mentor>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  mobileNo: { type: String, required: true, length: 10 },
  profession: { type: String, required: true },
  domainProfession: { type: String, required: true },
  currentWorkingJobAndCompany: String,
  summaryAbout: { type: String, required: true, maxlength: 100 },
  expectedPerMinuteCharge: { type: Number, required: true, max: 100 },
  linkedInProfile: { type: String, required: true },
  professionalEmail: { type: String, required: true },
  availabilityStatus: {
    type: String,
    required: true,
    enum: ["live", "busy", "away"],
  },
});

export const MentorModel = mongoose.model<Mentor>("Mentor", mentorSchema);
