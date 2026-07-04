import { useEffect, useState } from "react";
import { getTrendingCoins } from "../services/cryptoApi";

export default function useTrendingCoins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTrending() {
      try {
        const data = await getTrendingCoins();
        setCoins(data);
      } catch {
        setError("Unable to load trending coins.");
      } finally {
        setLoading(false);
      }
    }

    fetchTrending();
  }, []);

  return { coins, loading, error };
}