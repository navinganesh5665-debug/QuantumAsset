import {
  LayoutDashboard,
  Wallet,
  CandlestickChart,
  BrainCircuit,
  Newspaper,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: Wallet,
  },
  {
    name: "Markets",
    path: "/markets",
    icon: CandlestickChart,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BrainCircuit,
  },
  {
    name: "News",
    path: "/news",
    icon: Newspaper,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];