import { RouteGuard } from "@/components/RouteGuard";
import { Page5Content } from "@/components/page5/Page5Content";

/**
 * 5th Landing Page — Surprise + typewriter letter + Valentine prompt + Yes/No (evasive No) → Page 6.
 */
export default function Page5() {
  return (
    <RouteGuard>
      <Page5Content />
    </RouteGuard>
  );
}
