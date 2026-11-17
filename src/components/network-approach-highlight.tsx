"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function NetworkApproachHighlight() {
  const approach = useSearchParams().get("approach");

  useEffect(() => {
    if (!approach) return;
    const section = document.getElementById(approach);
    if (!section?.hasAttribute("data-network-approach")) return;

    section.dataset.highlighted = "true";
    return () => { delete section.dataset.highlighted; };
  }, [approach]);

  return null;
}
