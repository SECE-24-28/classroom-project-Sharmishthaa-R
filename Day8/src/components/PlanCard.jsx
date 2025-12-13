import { useNavigate } from "react-router-dom";

export default function PlanCard({ plan }){
  const navigate = useNavigate();
  const handle = () => navigate("/payment", { state: { plan } });

  return (
    <div className="bg-white/90 p-6 rounded-2xl shadow hover:scale-105 transition w-72 text-center">
      <h3 className="text-xl font-bold text-purple-700">{plan.Network}</h3>
      <p className="mt-2 text-gray-700">{plan.Data}</p>
      <p className="text-sm text-gray-600">Validity: {plan.Validity}</p>
      <p className="mt-4 text-3xl font-extrabold text-green-600">₹{plan.Price}</p>
      <button onClick={handle} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-xl">Recharge Now</button>
    </div>
  );
}
