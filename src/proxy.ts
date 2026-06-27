import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Next.js 16 "proxy" convention (formerly middleware).
export async function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    // Run on all routes except static assets, images and the service worker.
    "/((?!_next/static|_next/image|favicon.ico|sw.js|manifest.webmanifest|icons|media|.*\\.(?:png|jpg|jpeg|webp|svg|gif|ico)$).*)",
  ],
};
