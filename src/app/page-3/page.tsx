import { RouteGuard } from "@/components/RouteGuard";
import { Page3Content } from "@/components/page3/Page3Content";

/**
 * 3rd Landing Page. Shows result of Page 2 choice (+5 / -5), then commitment question.
 */
export default function Page3() {
  return (
    <RouteGuard>
      <Page3Content />
    </RouteGuard>
  );
}
