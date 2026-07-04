import Card from "../common/Card";
import useTrendingCoins from "../../hooks/useTrendingCoins";

export default function TrendingCoins() {
  const { coins, loading, error } = useTrendingCoins();

  if (loading) return <Card>Loading trending coins...</Card>;
  if (error) return <Card>{error}</Card>;

  return (
    <Card>
      <h2 className="mb-5 text-xl font-bold text-white">
        🔥 Trending Coins
      </h2>

      <div className="space-y-3">
        {coins.slice(0, 7).map(({ item }) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-slate-800 pb-2"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.small}
                alt={item.name}
                className="h-8 w-8 rounded-full"
              />

              <div>
                <p className="font-medium text-white">
                  {item.name}
                </p>

                <p className="text-xs text-slate-400">
                  {item.symbol}
                </p>
              </div>
            </div>

            <span className="text-cyan-400 font-semibold">
              #{item.market_cap_rank ?? "-"}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}