import { usePortfolio } from "../context/PortfolioContext";
import useCurrentPrices from "./useCurrentPrices";

export default function usePortfolioStats() {
  const { portfolio } = usePortfolio();
  const prices = useCurrentPrices(portfolio);

  let invested = 0;
  let current = 0;

  portfolio.forEach((asset) => {
    invested += asset.quantity * asset.buyPrice;

    const price = prices[asset.coinId]?.usd || 0;
    current += asset.quantity * price;
  });

  const profit = current - invested;

  const profitPercent =
    invested > 0
      ? (profit / invested) * 100
      : 0;

  return {
    invested,
    current,
    profit,
    profitPercent,
    assets: portfolio.length,
  };
}