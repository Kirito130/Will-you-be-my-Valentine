import { RouteGuard } from "@/components/RouteGuard";
import { Page6Content } from "@/components/page6/Page6Content";

/**
 * 6th Landing Page — Countdown to 8 PM IST surprise. Stage flow with flip-in
 * transitions, then timer; on zero, released message and burst. Uses Landing page 2 background.
 */
export default function Page6() {
  return (
    <RouteGuard>
      <Page6Content />
    </RouteGuard>
  );
}
