import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import Forbidden from "./components/Forbidden";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/ Home";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} /> 
          <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} allowedRoles={["admin"]} />} />
          <Route path="/user" element={<ProtectedRoute element={<UserDashboard />} allowedRoles={["user"]} />} />
          <Route path="/forbidden" element={<Forbidden />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
