import { NetworkOverview } from "@/components/network-overview";
import { createNetworkOverviewMetadata } from "@/lib/site";

export const metadata = createNetworkOverviewMetadata("ro");

export default function NetworkOverviewPage() {
  return <NetworkOverview locale="ro" />;
}
