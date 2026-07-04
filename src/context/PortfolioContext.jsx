import { createContext, useContext, useEffect, useState } from "react";

const PortfolioContext = createContext();
const STORAGE_KEY = "quantumasset-portfolio";

export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState(() => {
  const saved = localStorage.getItem(STORAGE_KEY);

  return saved ? JSON.parse(saved) : [];
});

  function addAsset(asset) {
    setPortfolio((prev) => [...prev, asset]);
  }

  function removeAsset(id) {
    setPortfolio((prev) =>
      prev.filter((asset) => asset.id !== id)
    );
  }
  useEffect(() => {
  localStorage.setItem(
  STORAGE_KEY,
  JSON.stringify(portfolio)
);
}, [portfolio]);

  return (
    <PortfolioContext.Provider
      value={{
        portfolio,
        addAsset,
        removeAsset,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}