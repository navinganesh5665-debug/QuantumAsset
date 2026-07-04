import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

import Card from "../common/Card";
import { portfolioAllocation } from "../../data/portfolioAllocation";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function PortfolioChart() {
  const data = {
    labels: portfolioAllocation.map((item) => item.name),

    datasets: [
      {
        data: portfolioAllocation.map((item) => item.value),

        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#8b5cf6",
        ],

        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#ffffff",
        },
      },
    },

    cutout: "70%",
  };

  return (
    <Card>
      <h2 className="mb-5 text-xl font-bold text-white">
        Portfolio Allocation
      </h2>

      <Doughnut
        data={data}
        options={options}
      />
    </Card>
  );
}