import { createContext, useContext, useEffect, useState } from "react";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState(() => {
  const saved = localStorage.getItem("portfolio");

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
    "portfolio",
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