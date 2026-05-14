import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json(
      { success: true, message: "Logged out successfully" },
      { status: 200 }
    );

    // Clear the auth token cookie
    response.cookies.set("authToken", "", {
      httpOnly: true,
      expires: new Date(0),
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Logout failed",
        ...(process.env.NODE_ENV === "development" && {
          details: error.message,
        }),
      },
      { status: 500 }
    );
  }
}
