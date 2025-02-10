import { Document, Model } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  userName: string;
  photo: string;
  firstName?: string;
  lastName?: string;
  planId: number;
  creditBalance: number;
}

export type UserModelType = Model<IUser, Record<string, unknown>>;
