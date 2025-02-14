import mongoose, { Schema, Model, model } from "mongoose";
import BaseModel from "./base.model.js";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true, 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmedPassword: {
      type: String,
      required: true,
    },
    mobilePhone: {
      type: [String],
      required: true,
    },
    gender: {
      type: [String],
      enum: ["male", "female"],
      required: true,
    }, //change enum with utils
    doctorID: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
    },
    patientID: { 
        type: Schema.Types.ObjectId, 
        ref: "Patient" },
    
  },
  { timeseries: true }
);

export const userModel = mongoose.models.userModel || model("User", userSchema);

