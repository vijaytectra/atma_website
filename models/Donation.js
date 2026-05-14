import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema(
  {
    // Donor information
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },

    // Address information
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },

    // Donation details
    amount: { type: Number, required: true },
    isRecurring: { type: Boolean, default: false },
    recurringFrequency: {
      type: String,
      enum: ["monthly", "quarterly", "yearly"],
      default: "monthly",
    },

    // Payment information
    transactionId: { type: String, required: true },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "completed",
    },

    // Metadata
    donationDate: { type: Date, default: Date.now },
    receiptSent: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

// Create index for faster queries
DonationSchema.index({ email: 1 });
DonationSchema.index({ donationDate: -1 });

export default mongoose.models.Donation ||
  mongoose.model("Donation", DonationSchema);
