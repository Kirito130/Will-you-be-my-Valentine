import { RouteGuard } from "@/components/RouteGuard";

/**
 * 7th Landing Page — Placeholder for next spec.
 */
export default function Page7() {
  return (
    <RouteGuard>
      <main className="min-h-screen flex items-center justify-center bg-valentine-page2">
        <p className="font-display text-2xl text-white drop-shadow-lg">
          Page 7 — placeholder
        </p>
      </main>
    </RouteGuard>
  );
}
