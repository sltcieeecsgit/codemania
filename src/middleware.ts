// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(_: NextRequest) {
  // Currently, allow all requests
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all routes except _next and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Match API and TRPC endpoints
    '/(api|trpc)(.*)',
  ],
};
