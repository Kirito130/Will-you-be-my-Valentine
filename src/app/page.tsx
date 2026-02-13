import { GatePage } from "@/components/gate/GatePage";

/**
 * Gate Page at site root (/).
 * Shows "Are you my dinosaur?" and password input; on success routes to /next.
 */
export default function Home() {
  return <GatePage />;
}
