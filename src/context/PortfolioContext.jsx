import { createContext, useContext, useState } from "react";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState([]);

  function addAsset(asset) {
    setPortfolio((prev) => [...prev, asset]);
  }

  function removeAsset(id) {
    setPortfolio((prev) =>
      prev.filter((asset) => asset.id !== id)
    );
  }

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