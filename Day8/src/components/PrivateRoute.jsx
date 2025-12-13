// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, requireAdmin=false }){
  const token = localStorage.getItem("token"); // user token
  const adminToken = localStorage.getItem("adminToken");
  if (requireAdmin) {
    return adminToken ? children : <Navigate to="/admin/login" />;
  }
  return token ? children : <Navigate to="/login" />;
}
