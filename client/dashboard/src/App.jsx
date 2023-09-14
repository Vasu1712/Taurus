import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Promote from "./promote/Promote.jsx";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/promote/*" element={<Promote />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
