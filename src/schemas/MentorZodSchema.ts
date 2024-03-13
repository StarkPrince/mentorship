import { z } from "zod";

export const MentorZodSchema = z.object({
  name: z.string(),
  address: z.string(),
  mobileNo: z.string().length(10),
  profession: z.string(),
  domainProfession: z.string(),
  currentWorkingJobAndCompany: z.string().optional(),
  summaryAbout: z.string().max(100),
  expectedPerMinuteCharge: z.number().max(100),
  linkedInProfile: z.string().url(),
  professionalEmail: z.string().email(),
  availabilityStatus: z.enum(["live", "busy", "away"]),
});

export type Mentor = z.infer<typeof MentorZodSchema>;
