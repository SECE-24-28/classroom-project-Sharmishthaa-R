import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PaymentDetails(){
  const { state } = useLocation();
  const rec = state?.rec;

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-bold text-purple-700 mb-4">Payment Successful</h3>
        {rec ? (
          <div>
            <p><strong>Transaction ID:</strong> {rec.id}</p>
            <p><strong>Amount:</strong> ₹{rec.amount}</p>
            <p><strong>Mobile:</strong> {rec.mobile}</p>
            <p><strong>Date:</strong> {new Date(rec.date).toLocaleString()}</p>
          </div>
        ) : <p>No transaction details.</p>}
      </div>
      <Footer />
    </>
  );
}
