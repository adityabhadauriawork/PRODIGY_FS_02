import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

function Analytics() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white text-4xl font-bold">
      Analytics (Coming Soon)
    </div>
  );
}

function Settings() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white text-4xl font-bold">
      Settings (Coming Soon)
    </div>
  );
}

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/employees" element={<Employees />} />

      <Route path="/add-employee" element={<AddEmployee />} />

      <Route path="/edit/:id" element={<EditEmployee />} />

      <Route path="/analytics" element={<Analytics />} />

      <Route path="/settings" element={<Settings />} />

      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}