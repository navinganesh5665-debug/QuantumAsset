import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

import Card from "../common/Card";
import { performanceData } from "../../data/performanceData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

export default function PerformanceChart() {
  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#94a3b8",
        },
        grid: {
          color: "#1e293b",
        },
      },

      y: {
        ticks: {
          color: "#94a3b8",
        },
        grid: {
          color: "#1e293b",
        },
      },
    },
  };

  return (
    <Card className="mt-6">
      <h2 className="mb-5 text-xl font-bold text-white">
        Portfolio Performance
      </h2>

      <Line
        data={performanceData}
        options={options}
      />
    </Card>
  );
}