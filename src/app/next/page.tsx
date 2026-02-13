import { RouteGuard } from "@/components/RouteGuard";
import { NextPageContent } from "@/components/next/NextPageContent";

/**
 * 2nd Landing Page. Only accessible after passing the gate.
 * Shows timed text flow then CTA buttons to /page-3.
 */
export default function NextPage() {
  return (
    <RouteGuard>
      <NextPageContent />
    </RouteGuard>
  );
}
