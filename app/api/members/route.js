import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    await dbConnect();

    // Get the token from cookies
    const cookieHeader = request.headers.get("cookie");
    const cookies = cookieHeader?.split(";").reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split("=");
      acc[name] = value;
      return acc;
    }, {});

    const token = cookies?.authToken;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Authentication token missing" },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch all members (excluding sensitive data)
    const members = await User.find({})
      .select("-password -__v")
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, members }, { status: 200 });
  } catch (error) {
    console.error("Members fetch error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch members",
      },
      { status: 500 }
    );
  }
}
