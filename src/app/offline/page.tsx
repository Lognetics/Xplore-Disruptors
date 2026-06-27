import { WifiOff } from "lucide-react";
import { XMark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Offline" };

export default function OfflinePage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-6 text-center">
      <XMark className="h-14 w-14" />
      <div className="mt-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-sm text-muted">
        <WifiOff className="h-4 w-4" /> You&apos;re offline
      </div>
      <h1 className="mt-4 font-display text-2xl font-bold">No connection right now</h1>
      <p className="mt-2 text-sm text-muted">
        Some of Xplore works offline once cached. Reconnect to load live events, networking and your dashboard.
      </p>
      <Button href="/" className="mt-6">Try again</Button>
    </div>
  );
}
