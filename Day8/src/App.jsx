import { BrowserRouter, Routes, Route } from "react-router-dom";

/* components */
import PrivateRoute from "./components/PrivateRoute";

/* public pages */
import Home from "./pages/public/Home";
import Plans from "./pages/public/Plans";
import Login from "./pages/public/Login";
import Signup from "./pages/public/Signup";
import Payment from "./pages/public/Payment";

/* user pages */
import UserHistory from "./pages/user/UserHistory";
import PaymentDetails from "./pages/user/PaymentDetails";

/* admin */
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/plans" element={<Plans/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/payment" element={<Payment/>} />

        <Route path="/user/history" element={
          <PrivateRoute><UserHistory/></PrivateRoute>
        } />
        <Route path="/user/payment-details" element={
          <PrivateRoute><PaymentDetails/></PrivateRoute>
        } />

        <Route path="/admin/login" element={<AdminLogin/>} />
        <Route path="/admin/dashboard" element={
          <PrivateRoute requireAdmin={true}><AdminDashboard/></PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}
