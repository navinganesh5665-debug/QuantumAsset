import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

import { usePortfolio } from "../../context/PortfolioContext";
import useCurrentPrices from "../../hooks/useCurrentPrices";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function PortfolioAllocationChart() {
  const { portfolio } = usePortfolio();
  const prices = useCurrentPrices(portfolio);

  if (portfolio.length === 0) {
    return (
      <div className="rounded-2xl bg-slate-900 p-6 text-center text-slate-400">
        No portfolio data available.
      </div>
    );
  }

  const labels = portfolio.map((asset) => asset.coin);

  const values = portfolio.map((asset) => {
    const price = prices[asset.coinId]?.usd || 0;
    return asset.quantity * price;
  });

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          "#3b82f6",
          "#06b6d4",
          "#22c55e",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6",
          "#ec4899",
          "#14b8a6",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-5 text-2xl font-bold text-white">
        Portfolio Allocation
      </h2>

      <Doughnut data={data} options={options} />
    </div>
  );
}