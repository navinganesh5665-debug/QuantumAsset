import { usePortfolio } from "../../context/PortfolioContext";
import useCurrentPrices from "../../hooks/useCurrentPrices";

export default function HoldingsTable() {
  const { portfolio, removeAsset } = usePortfolio();
  const prices = useCurrentPrices(portfolio);

  if (portfolio.length === 0) {
    return (
      <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-center text-slate-400">
        No assets added yet.
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-900 p-6">
      <h2 className="mb-5 text-xl font-bold text-white">
        Portfolio Holdings
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-700 text-slate-400">
            <th className="pb-3">Coin</th>
            <th className="pb-3">Quantity</th>
            <th className="pb-3">Buy Price</th>
            <th className="pb-3">Current Price</th>
            <th className="pb-3">Profit / Loss</th>
            <th className="pb-3">Current Value</th>
            <th className="pb-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {portfolio.map((asset) => {
            const currentPrice = prices[asset.coinId]?.usd;

            const currentValue = currentPrice
              ? asset.quantity * currentPrice
              : null;

            const investedValue =
              asset.quantity * asset.buyPrice;

            const profitLoss =
              currentValue !== null
                ? currentValue - investedValue
                : null;

            const profitPercent =
              currentPrice
                ? ((currentPrice - asset.buyPrice) /
                    asset.buyPrice) *
                  100
                : null;

            return (
              <tr
                key={asset.id}
                className="border-b border-slate-800"
              >
                <td className="py-4 font-medium text-white">
                  {asset.coin}
                </td>

                <td className="text-slate-300">
                  {asset.quantity}
                </td>

                <td className="text-slate-300">
                  $
                  {asset.buyPrice.toLocaleString()}
                </td>

                <td className="text-cyan-400">
                  {currentPrice
                    ? `$${currentPrice.toLocaleString()}`
                    : "Loading..."}
                </td>

                <td
                  className={`font-semibold ${
                    profitLoss >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {profitLoss !== null ? (
                    <>
                      {profitLoss >= 0 ? "+" : "-"}$
                      {Math.abs(profitLoss).toLocaleString(
                        undefined,
                        {
                          maximumFractionDigits: 2,
                        }
                      )}
                      <br />
                      <span className="text-xs">
                        ({profitPercent.toFixed(2)}%)
                      </span>
                    </>
                  ) : (
                    "Loading..."
                  )}
                </td>

                <td className="font-semibold text-yellow-400">
                  {currentValue
                    ? `$${currentValue.toLocaleString(
                        undefined,
                        {
                          maximumFractionDigits: 2,
                        }
                      )}`
                    : "Loading..."}
                </td>

                <td>
                  <button
                    onClick={() =>
                      removeAsset(asset.id)
                    }
                    className="rounded-lg bg-red-500 px-3 py-1 text-white transition hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}