import { RouteGuard } from "@/components/RouteGuard";
import { Page7Content } from "@/components/page7/Page7Content";

/**
 * 7th Landing Page — Valentine finale. Same background as Page 6.
 * Grand Surprise intro then promise flow with typewriter + backspace,
 * ending with "I LOVE YOU SAKINA". Background music: Ishq Hai.
 */
export default function Page7() {
  return (
    <RouteGuard>
      <Page7Content />
    </RouteGuard>
  );
}
