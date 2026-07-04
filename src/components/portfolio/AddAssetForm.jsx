import { useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext";

export default function AddAssetForm() {
  const { addAsset } = usePortfolio();

  const [coin, setCoin] = useState("Bitcoin");
  const [quantity, setQuantity] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!quantity || !buyPrice) return;

    addAsset({
      id: Date.now(),
      coin,
      quantity: Number(quantity),
      buyPrice: Number(buyPrice),
    });

    setQuantity("");
    setBuyPrice("");
  }

  return (
    <div className="rounded-2xl bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-5 text-xl font-bold text-white">
        Add New Asset
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <select
          value={coin}
          onChange={(e) => setCoin(e.target.value)}
          className="w-full rounded-lg bg-slate-800 p-3 text-white"
        >
          <option>Bitcoin</option>
          <option>Ethereum</option>
          <option>Solana</option>
          <option>XRP</option>
        </select>

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full rounded-lg bg-slate-800 p-3 text-white"
        />

        <input
          type="number"
          placeholder="Buy Price"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
          className="w-full rounded-lg bg-slate-800 p-3 text-white"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-white hover:bg-cyan-600"
        >
          ➕ Add Asset
        </button>
      </form>
    </div>
  );
}