import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function GET(request, { params }) {
  try {
    await dbConnect();

    // Get token from cookies
    const cookieHeader = request.headers.get("cookie") || "";
    const cookies = cookieHeader.split(";").reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split("=");
      acc[name] = value;
      return acc;
    }, {});

    const token = cookies.authToken;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Authentication token missing" },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get member details
    const member = await User.findById(params.id).select("-password -__v");

    if (!member) {
      return NextResponse.json(
        { success: false, error: "Member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        member,
        isCurrentUser: decoded.userId === params.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Member fetch error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch member",
        ...(process.env.NODE_ENV === "development" && {
          details: error.message,
        }),
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await dbConnect();

    // Get token from cookies
    const cookieHeader = request.headers.get("cookie") || "";
    const cookies = cookieHeader.split(";").reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split("=");
      acc[name] = value;
      return acc;
    }, {});

    const token = cookies.authToken;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Authentication token missing" },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Only allow users to edit their own profile
    if (decoded.userId !== params.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized to edit this profile" },
        { status: 403 }
      );
    }

    const updateData = await request.json();

    // Update member
    const updatedMember = await User.findByIdAndUpdate(params.id, updateData, {
      new: true,
    }).select("-password -__v");

    return NextResponse.json(
      { success: true, member: updatedMember },
      { status: 200 }
    );
  } catch (error) {
    console.error("Member update error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update member",
        ...(process.env.NODE_ENV === "development" && {
          details: error.message,
        }),
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();

    // Get token from cookies
    const cookieHeader = request.headers.get("cookie") || "";
    const cookies = cookieHeader.split(";").reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split("=");
      acc[name] = value;
      return acc;
    }, {});

    const token = cookies.authToken;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Authentication token missing" },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Only allow users to delete their own profile
    if (decoded.userId !== params.id) {
      return NextResponse.json(
        { success: false, error: "Unauthorized to delete this profile" },
        { status: 403 }
      );
    }

    await User.findByIdAndDelete(params.id);

    return NextResponse.json(
      { success: true, message: "Member deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Member delete error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete member",
        ...(process.env.NODE_ENV === "development" && {
          details: error.message,
        }),
      },
      { status: 500 }
    );
  }
}
