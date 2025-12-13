// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-md shadow-lg">
      <div className="text-2xl font-bold text-purple-600">RechargeX</div>

      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-purple-700">Home</Link></li>
        <li><Link to="/plans" className="hover:text-purple-700">Plans</Link></li>
        <li><Link to="/login" className="hover:text-purple-700">Login</Link></li>
        <li><Link to="/signup" className="hover:text-purple-700">Signup</Link></li>
        <li><Link to="/user/history" className="hover:text-purple-700">My History</Link></li>
        <li><Link to="/admin/login" className="text-sm text-red-600 hover:text-red-700">Admin</Link></li>
      </ul>
    </nav>
  );
}
