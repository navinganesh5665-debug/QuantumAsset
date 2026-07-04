import { useEffect, useState } from "react";
import { getMarketData } from "../services/cryptoApi";

export default function useCryptoMarket() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMarketData();
        setCoins(data);
      } catch (err) {
        setError("Failed to load crypto market data.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    coins,
    loading,
    error,
  };
}