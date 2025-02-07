import { model, models, Schema } from "mongoose";
import { IImage, ImageModelType } from "./image.interface";

const ImageSchema = new Schema<IImage, ImageModelType>({
  title: { type: String, required: true },
  transformationTypes: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: String, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models.Image || model("Image", ImageSchema);

export default Image;
