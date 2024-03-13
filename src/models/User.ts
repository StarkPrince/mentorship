const INVALID_CONSTRUCTOR_PARAM =
  "nameOrObj arg must a string or an " +
  "object with the appropriate user keys.";

export enum UserRoles {
  Standard,
  Admin,
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  pwdHash?: string;
  role?: UserRoles;
}

export interface ISessionUser {
  id: number;
  email: string;
  name: string;
  role: IUser["role"];
}

export interface UserDetails {
  age?: number; // Optional property
  gender?: "male" | "female" | "other"; // Optional property
  linkedInProfile?: string; // Optional property
}

export interface IMentee {
  name: string;
  emailId: string;
  mobileNo: string;
  profession: string;
  subcategoryProfession: string;
  currentWorkingJob?: string; // Optional property
  company?: string; // Optional property
  summaryAbout: string;
  userDetails: UserDetails;
  walletBalance: number;
  linkedBankAccount?: boolean; // Optional property
}

export interface IMentor {
  name: string;
  address: string;
  mobileNo: string;
  profession: string;
  domainProfession: string;
  currentWorkingJobAndCompany?: string; // Optional property
  summaryAbout: string;
  expectedPerMinuteCharge: number;
  linkedInProfile: string;
  professionalEmail: string;
  availabilityStatus: "live" | "busy" | "away";
  bankAccountLinked?: boolean; // Optional property
}

function new_(
  name?: string,
  email?: string,
  role?: UserRoles,
  pwdHash?: string,
  id?: number // id last cause usually set by db
): IUser {
  return {
    id: id ?? -1,
    name: name ?? "",
    email: email ?? "",
    role: role ?? UserRoles.Standard,
    pwdHash: pwdHash ?? "",
  };
}

function from(param: object): IUser {
  // Check is user
  if (!isUser(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  // Get user instance
  const p = param as IUser;
  return new_(p.name, p.email, p.role, p.pwdHash, p.id);
}

function isUser(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === "object" &&
    "id" in arg &&
    "email" in arg &&
    "name" in arg &&
    "role" in arg
  );
}

// **** Export default **** //

export default {
  new: new_,
  from,
  isUser,
} as const;
