"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GATE_OK_KEY = "val_gate_ok";

/**
 * Checks sessionStorage for val_gate_ok. If missing, redirects to /.
 * Use on pages that require the gate to have been passed (e.g. /next and beyond).
 */
export function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(GATE_OK_KEY) !== "1") {
      router.replace("/");
    }
  }, [router]);

  return <>{children}</>;
}
