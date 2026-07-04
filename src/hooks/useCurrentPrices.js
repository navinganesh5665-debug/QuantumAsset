import { useEffect, useState } from "react";
import { getCurrentPrices } from "../services/cryptoApi";

export default function useCurrentPrices(portfolio) {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    if (!portfolio.length) return;

    async function loadPrices() {
      try {
        const ids = [...new Set(portfolio.map((a) => a.coinId))];

        const data = await getCurrentPrices(ids);

        setPrices(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadPrices();
  }, [portfolio]);

  return prices;
}