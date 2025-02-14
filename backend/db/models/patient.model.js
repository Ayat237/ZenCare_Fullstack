import mongoose, { Schema, model } from "mongoose";

const patientSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    min: 3,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  medicalHistoryID: {
    type: Schema.Types.ObjectId,
    ref: "MedicalHistory",
  },
  prescriptionsID: {
    type: Schema.Types.ObjectId,
    ref: "Prescription",
  },
  medicationsID: {
    type: Schema.Types.ObjectId,
    ref: "Medication",
  },
});

export const patientModel =
  mongoose.models.patientModel || model("Patient", patientSchema);
