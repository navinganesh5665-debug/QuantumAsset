import MainLayout from "../layouts/MainLayout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatCard from "../components/dashboard/StatCard";
import MarketOverview from "../components/dashboard/MarketOverview";
import PortfolioChart from "../components/dashboard/PortfolioChart";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import Watchlist from "../components/dashboard/Watchlist";
import TrendingCoins from "../components/dashboard/TrendingCoins";
import AIInsights from "../components/dashboard/AIInsights";
import PortfolioAllocationChart from "../components/dashboard/PortfolioAllocationChart";
import usePortfolioStats from "../hooks/usePortfolioStats";

export default function Dashboard() {
  const stats = usePortfolioStats();

  return (
    <MainLayout>
      <DashboardHeader />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Portfolio Value"
          value={`$${stats.current.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}`}
          change={`${stats.profitPercent.toFixed(2)}%`}
          positive={stats.profit >= 0}
        />

        <StatCard
          title="Total Profit"
          value={`${stats.profit >= 0 ? "+" : "-"}$${Math.abs(
            stats.profit
          ).toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}`}
          change={`${stats.profitPercent.toFixed(2)}%`}
          positive={stats.profit >= 0}
        />

        <StatCard
          title="Assets"
          value={stats.assets}
          change="Portfolio"
          positive={true}
        />

        <StatCard
          title="Total Invested"
          value={`$${stats.invested.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}`}
          change="Capital"
          positive={true}
        />
      </div>

      {/* Portfolio Chart + Market Overview */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PortfolioChart />
        <MarketOverview />
      </div>

      {/* Portfolio Allocation */}
      <div className="mt-8">
        <PortfolioAllocationChart />
      </div>

      {/* Performance Chart */}
      <div className="mt-8">
        <PerformanceChart />
      </div>

      {/* Watchlist + Trending Coins */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Watchlist />
        <TrendingCoins />
      </div>

      {/* AI Insights */}
      <div className="mt-8">
        <AIInsights />
      </div>
    </MainLayout>
  );
}