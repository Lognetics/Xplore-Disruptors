import { AppShell } from "@/components/shell/app-shell";

/** The product/app experience (Explore, Events, Network, Dashboard) uses the native-style shell. */
export default function AppGroupLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
