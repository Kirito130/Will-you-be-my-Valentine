import { RouteGuard } from "@/components/RouteGuard";
import { Page4Content } from "@/components/page4/Page4Content";

/**
 * 4th Landing Page — Anti-Impostor Quiz. Points HUD, intro, 5 questions with 30s timer, then pass/fail end screen.
 */
export default function Page4() {
  return (
    <RouteGuard>
      <Page4Content />
    </RouteGuard>
  );
}
