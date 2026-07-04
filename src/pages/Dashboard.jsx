import MainLayout from "../layouts/MainLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import MarketOverview from "../components/dashboard/MarketOverview";
import { dashboardStats } from "../data/dashboardStats";
import PortfolioChart from "../components/dashboard/PortfolioChart";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import Watchlist from "../components/dashboard/Watchlist";
import TrendingCoins from "../components/dashboard/TrendingCoins";
import AIInsights from "../components/dashboard/AIInsights";

export default function Dashboard() {
  return (
    <MainLayout>
      <DashboardHeader />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            positive={stat.positive}
          />
        ))}
      </div>

      {/* Portfolio Chart + Market Overview */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PortfolioChart />
        <MarketOverview />
      </div>
      <div className="mt-8">
  <PerformanceChart />
</div>
<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
  <Watchlist />
  <TrendingCoins />
</div>
    <AIInsights />
    </MainLayout>
  );
}