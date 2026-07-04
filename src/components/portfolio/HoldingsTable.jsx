import { usePortfolio } from "../../context/PortfolioContext";

export default function HoldingsTable() {
  const { portfolio, removeAsset } = usePortfolio();

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
            <th className="pb-3">Value</th>
            <th className="pb-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {portfolio.map((asset) => (
            <tr
              key={asset.id}
              className="border-b border-slate-800"
            >
              <td className="py-4 text-white">
                {asset.coin}
              </td>

              <td className="text-slate-300">
                {asset.quantity}
              </td>

              <td className="text-slate-300">
                ${asset.buyPrice}
              </td>

              <td className="text-yellow-400">
                --
              </td>

              <td className="text-cyan-400">
                $
                {(asset.quantity * asset.buyPrice).toLocaleString()}
              </td>

              <td>
                <button
                  onClick={() => removeAsset(asset.id)}
                  className="rounded-lg bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}