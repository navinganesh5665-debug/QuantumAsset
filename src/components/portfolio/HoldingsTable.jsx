import { Trash2 } from "lucide-react";
import { usePortfolio } from "../../context/PortfolioContext";
import useCurrentPrices from "../../hooks/useCurrentPrices";

export default function HoldingsTable() {
  const { portfolio, removeAsset } = usePortfolio();
  const prices = useCurrentPrices(portfolio);

  if (portfolio.length === 0) {
    return (
      <div className="mt-6 rounded-2xl bg-slate-900 p-8 text-center text-slate-400">
        No assets added yet.
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-2xl bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Portfolio Holdings
      </h2>

      <div className="space-y-5">
        {portfolio.map((asset) => {
          const currentPrice = prices[asset.coinId]?.usd;

          const currentValue = currentPrice
            ? asset.quantity * currentPrice
            : 0;

          const investedValue =
            asset.quantity * asset.buyPrice;

          const profitLoss =
            currentValue - investedValue;

          const profitPercent =
            currentPrice
              ? ((currentPrice - asset.buyPrice) /
                  asset.buyPrice) *
                100
              : 0;

          return (
            <div
              key={asset.id}
              className="rounded-xl border border-slate-700 bg-slate-800 p-5 transition hover:border-cyan-400"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {asset.coin}
                  </h3>

                  <p className="text-slate-400">
                    Quantity: {asset.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeAsset(asset.id)}
                  className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
                <div>
                  <p className="text-sm text-slate-400">
                    Buy Price
                  </p>

                  <h4 className="text-lg font-semibold text-white">
                    $
                    {asset.buyPrice.toLocaleString()}
                  </h4>
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Current Price
                  </p>

                  <h4 className="text-lg font-semibold text-cyan-400">
                    {currentPrice
                      ? `$${currentPrice.toLocaleString()}`
                      : "Loading..."}
                  </h4>
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Current Value
                  </p>

                  <h4 className="text-lg font-semibold text-yellow-400">
                    $
                    {currentValue.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </h4>
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Profit / Loss
                  </p>

                  <h4
                    className={`text-lg font-bold ${
                      profitLoss >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {profitLoss >= 0 ? "+" : "-"}$
                    {Math.abs(profitLoss).toLocaleString(
                      undefined,
                      {
                        maximumFractionDigits: 2,
                      }
                    )}
                  </h4>

                  <p
                    className={`text-sm ${
                      profitLoss >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    ({profitPercent.toFixed(2)}%)
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}