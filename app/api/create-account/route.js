import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect"; // You'll need to create this
import User from "@/models/User"; // Import the User model

export async function POST(request) {
  try {
    const { email, password, ...userData } = await request.json();

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          error: "Password must be at least 8 characters long",
        },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      ...userData,
      email,
      password: hashedPassword,
      membershipType: userData.membershipType || "unknown",
      membershipAmount: getMembershipAmount(userData.membershipType), // Add this line
      trainingLevel: userData.trainingLevel || "unknown",
    });

    function getMembershipAmount(membershipType) {
      switch (membershipType) {
        case "lifetime":
          return 150.0;
        case "medicalStudent":
          return 75.0;
        case "alliedHealth":
          return 100.0;
        default:
          return 0.0;
      }
    }

    // Save user to database
    const savedUser = await newUser.save();

    // Return success without sensitive data
    return NextResponse.json(
      {
        success: true,
        userId: savedUser._id,
        email: savedUser.email,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        membershipType: savedUser.membershipType,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Account creation error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        ...(process.env.NODE_ENV === "development" && {
          details: error.message,
        }),
      },
      { status: 500 }
    );
  }
}
