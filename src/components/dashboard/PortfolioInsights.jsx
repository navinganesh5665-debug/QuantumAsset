import { usePortfolio } from "../../context/PortfolioContext";
import useCurrentPrices from "../../hooks/useCurrentPrices";

export default function PortfolioInsights() {
  const { portfolio } = usePortfolio();
  const prices = useCurrentPrices(portfolio);

  if (portfolio.length === 0) {
    return (
      <div className="rounded-2xl bg-slate-900 p-6">
        <h2 className="mb-4 text-xl font-bold text-white">
          Portfolio Insights
        </h2>
        <p className="text-slate-400">
          Add assets to view insights.
        </p>
      </div>
    );
  }

  const holdings = portfolio.map((asset) => {
    const currentPrice = prices[asset.coinId]?.usd || 0;

    const currentValue = currentPrice * asset.quantity;
    const invested = asset.buyPrice * asset.quantity;
    const profit = currentValue - invested;

    return {
      ...asset,
      currentValue,
      profit,
    };
  });

  const largestHolding = [...holdings].sort(
    (a, b) => b.currentValue - a.currentValue
  )[0];

  const bestPerformer = [...holdings].sort(
    (a, b) => b.profit - a.profit
  )[0];

  const worstPerformer = [...holdings].sort(
    (a, b) => a.profit - b.profit
  )[0];

  const Card = ({ title, asset, color }) => (
    <div className="rounded-xl bg-slate-800 p-5">
      <p className="text-slate-400">{title}</p>

      <h3 className="mt-2 text-xl font-bold text-white">
        {asset.coin}
      </h3>

      <p className={`mt-2 font-semibold ${color}`}>
        ${asset.currentValue.toLocaleString(undefined, {
          maximumFractionDigits: 2,
        })}
      </p>
    </div>
  );

  return (
    <div className="rounded-2xl bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Portfolio Insights
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <Card
          title="🏆 Largest Holding"
          asset={largestHolding}
          color="text-cyan-400"
        />

        <Card
          title="📈 Best Performer"
          asset={bestPerformer}
          color="text-green-400"
        />

        <Card
          title="📉 Worst Performer"
          asset={worstPerformer}
          color="text-red-400"
        />
      </div>
    </div>
  );
}