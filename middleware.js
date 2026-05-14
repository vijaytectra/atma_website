import { NextResponse } from "next/server";
import { verify } from "@tsndr/cloudflare-worker-jwt";

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const protectedPaths = ["/membership"];
  const isProtected = protectedPaths.some((p) => path.startsWith(p));

  if (!isProtected) {
    return NextResponse.next();
  }

  const token = request.cookies.get("authToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const isValid = await verify(token, process.env.JWT_SECRET);

    if (!isValid) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/membership/:path*"],
};
