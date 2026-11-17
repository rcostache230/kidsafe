import { NetworkOverview } from "@/components/network-overview";
import { createNetworkOverviewMetadata } from "@/lib/site";

export const metadata = createNetworkOverviewMetadata("en");

export default function NetworkOverviewPage() {
  return <NetworkOverview locale="en" />;
}
