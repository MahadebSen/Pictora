import { Schema, model, models } from "mongoose";
import { ITransaction, TransactionModelType } from "./transaction.interface";

const TransactionSchema = new Schema<ITransaction, TransactionModelType>({
  createdAt: { type: Date, default: Date.now },
  stripeId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  plan: { type: String },
  credits: { type: Number },
  buyer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Transaction =
  models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
