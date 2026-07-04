import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Markets from "./pages/Markets";
import Analytics from "./pages/Analytics";
import News from "./pages/News";
import Settings from "./pages/Settings";
import Premium from "./pages/Premium";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/markets" element={<Markets />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/news" element={<News />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/premium" element={<Premium />} />
    </Routes>
  );
}

export default App;