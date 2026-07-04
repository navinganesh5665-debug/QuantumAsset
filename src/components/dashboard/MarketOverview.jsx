import Card from "../common/Card";
import useCryptoMarket from "../../hooks/useCryptoMarket";

export default function MarketOverview() {
  const { coins, loading, error } = useCryptoMarket();

  if (loading) {
    return <Card>Loading market data...</Card>;
  }

  if (error) {
    return <Card>{error}</Card>;
  }

  return (
    <Card className="mt-8">
      <h2 className="mb-5 text-xl font-bold text-white">
        Top Crypto Markets
      </h2>

      <div className="space-y-4">
        {coins.slice(0, 5).map((coin) => (
          <div
            key={coin.id}
            className="flex items-center justify-between border-b border-slate-800 pb-3"
          >
            <div>
              <p className="font-semibold text-white">
                {coin.name}
              </p>

              <p className="text-sm text-slate-400">
                {coin.symbol.toUpperCase()}
              </p>
            </div>

            <div className="text-right">
              <p className="text-white">
                ${coin.current_price.toLocaleString()}
              </p>

              <p
                className={
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}