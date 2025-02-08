import { Document, Model, Types } from "mongoose";

export interface ITransaction extends Document {
  createdAt: Date;
  stripeId: string;
  amount: number;
  plan?: string;
  credits?: number;
  buyer: Types.ObjectId;
}

export type TransactionModelType = Model<ITransaction, Record<string, unknown>>;
