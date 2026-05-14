import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    gender: { type: String, required: true },
    mobilePhone: { type: String, required: true },
    officePhone: { type: String },
    email: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    gradYear: { type: Number, required: true },
    residencyInstitution: { type: String },
    fellowshipInstitution: { type: String },
    primarySpeciality: { type: String, required: true },
    trainingLevel: { type: String, required: true },
    isYoungPhysicianUnder40: { type: Boolean, default: false },
    anticipatedCompletion: { type: Number },
    completionSpeciality: { type: String },
    membershipType: { type: String, required: true },
    password: { type: String, required: true },
    emailVerified: { type: Boolean, default: false },
    role: { type: String, default: "member" },
    status: { type: String, default: "active" },
    membershipAmount: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
  },
  {
    timestamps: true, // This will automatically manage createdAt and updatedAt
  }
);

// Create model from schema
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
