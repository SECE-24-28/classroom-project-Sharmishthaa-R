import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import service from "../../services/apiServices";

export default function Payment(){
  const { state } = useLocation();
  const plan = state?.plan;
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [processing, setProcessing] = useState(false);

  if (!plan) return <>
    <Navbar />
    <div className="p-10 text-center">No plan selected.</div>
    <Footer/>
  </>;

  const pay = async () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) { alert("Enter valid 10-digit mobile"); return; }
    setProcessing(true);
    try{
      const user = JSON.parse(localStorage.getItem("user")||"null");
      const payload = { mobile, planId: plan.id, amount: plan.Price, userId: user?.id || null };
      const rec = await service.recharge(payload);
      alert("Recharge successful (id: "+rec.id+")");
      navigate("/user/payment-details", { state: { rec } });
    }catch(err){
      alert("Payment failed");
    }finally{ setProcessing(false); }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow mt-16">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Confirm Recharge</h2>
        <div className="bg-purple-50 p-4 rounded mb-4">
          <div className="font-bold">{plan.Network} — ₹{plan.Price}</div>
          <div className="text-sm text-gray-600">{plan.Data} • {plan.Validity}</div>
        </div>

        <input className="w-full border p-3 rounded mb-3" placeholder="Enter Mobile Number" value={mobile} onChange={e=>setMobile(e.target.value)} />

        <button onClick={pay} disabled={processing} className="w-full bg-green-600 text-white p-3 rounded">
          {processing ? "Processing..." : `Pay ₹${plan.Price}`}
        </button>
      </div>
      <Footer/>
    </>
  );
}
