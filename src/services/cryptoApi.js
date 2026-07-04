import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export async function getMarketData() {
  const response = await axios.get(
    `${BASE_URL}/coins/markets`,
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    }
  );

  return response.data;
}
export async function getTrendingCoins() {
  const response = await axios.get(
    `${BASE_URL}/search/trending`
  );

  return response.data.coins;
}