import { z } from "zod";

export const MenteeZodSchema = z.object({
  name: z.string(),
  emailId: z.string().email(),
  mobileNo: z.string().length(10),
  profession: z.string(),
  subcategoryProfession: z.string(),
  currentWorkingJob: z.string().optional(),
  company: z.string().optional(),
  summaryAbout: z.string().max(1000),
  userDetails: z.object({
    age: z.number().min(13).optional(),
    gender: z.enum(["male", "female", "other"]).optional(),
    linkedInProfile: z.string().url().optional(),
  }),
  walletBalance: z.number().min(500),
});

export type Mentee = z.infer<typeof MenteeZodSchema>;
