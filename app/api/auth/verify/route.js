import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function GET(request) {
  try {
    const token = request.cookies.get("authToken")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Not authenticated" },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await dbConnect();

    // Get user data
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (error) {
    console.error("Auth verification error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Authentication failed",
        ...(process.env.NODE_ENV === "development" && {
          details: error.message,
        }),
      },
      { status: 401 }
    );
  }
}
