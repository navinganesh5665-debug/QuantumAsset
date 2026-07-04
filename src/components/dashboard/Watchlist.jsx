import Card from "../common/Card";
import { Star } from "lucide-react";
import { watchlistData } from "../../data/watchlistData";

export default function Watchlist() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          Watchlist
        </h2>

        <Star className="text-yellow-400" size={20} />
      </div>

      <div className="space-y-4">
        {watchlistData.map((coin) => (
          <div
            key={coin.id}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-3"
          >
            <div>
              <p className="font-semibold text-white">
                {coin.name}
              </p>

              <p className="text-xs text-slate-400">
                {coin.symbol}
              </p>
            </div>

            <div className="text-right">
              <p className="text-white">
                {coin.price}
              </p>

              <p
                className={`text-sm ${
                  coin.positive
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {coin.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}