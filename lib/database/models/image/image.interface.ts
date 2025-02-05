import { Document, Model } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationTypes: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export type ImageModelType = Model<IImage, Record<string, unknown>>;
