import { SquaresFour, Devices, WifiHigh, SlidersHorizontal } from "@phosphor-icons/react/dist/ssr";

type Props = { className?: string };
export function IconApps(props: Props) { return <SquaresFour {...props} aria-hidden="true" />; }
export function IconDevices(props: Props) { return <Devices {...props} aria-hidden="true" />; }
export function IconNetwork(props: Props) { return <WifiHigh {...props} aria-hidden="true" />; }
export function IconOS(props: Props) { return <SlidersHorizontal {...props} aria-hidden="true" />; }
