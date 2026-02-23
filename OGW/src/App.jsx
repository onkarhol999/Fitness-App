import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>
      {/* Root Route */}
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;