import { useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";

const coinOptions = [
  {
    id: "bitcoin",
    name: "Bitcoin",
  },
  {
    id: "ethereum",
    name: "Ethereum",
  },
  {
    id: "solana",
    name: "Solana",
  },
  {
    id: "ripple",
    name: "XRP",
  },
];

export default function AddAssetForm() {
  const { addAsset } = usePortfolio();

  const [coin, setCoin] = useState("bitcoin");
  const [quantity, setQuantity] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!quantity || !buyPrice) return;

    const selectedCoin = coinOptions.find(
      (item) => item.id === coin
    );

    addAsset({
      id: Date.now(),
      coinId: selectedCoin.id,
      coin: selectedCoin.name,
      quantity: Number(quantity),
      buyPrice: Number(buyPrice),
    });

    setCoin("bitcoin");
    setQuantity("");
    setBuyPrice("");
  }

  return (
    <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-5 text-xl font-bold text-white">
        Add New Asset
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={coin}
          onChange={(e) => setCoin(e.target.value)}
          className="w-full rounded-lg bg-slate-800 p-3 text-white outline-none focus:ring-2 focus:ring-cyan-500"
        >
          {coinOptions.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full rounded-lg bg-slate-800 p-3 text-white outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <input
          type="number"
          placeholder="Buy Price"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
          className="w-full rounded-lg bg-slate-800 p-3 text-white outline-none focus:ring-2 focus:ring-cyan-500"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          ➕ Add Asset
        </button>
      </form>
    </div>
  );
}