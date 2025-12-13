import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import service from "../../services/apiServices";

export default function UserHistory(){
  const [history, setHistory] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")||"null");

  useEffect(()=> {
    if (!user) return;
    service.getUserRecharges(user.id).then(setHistory).catch(()=>setHistory([]));
  }, []);

  return (
    <>
      <Navbar/>
      <div className="max-w-4xl mx-auto p-6 mt-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">My Recharge History</h2>
        {history.length === 0 ? <p>No recharges yet.</p> : (
          <div className="space-y-4">
            {history.map(h=>(
              <div key={h.id} className="bg-white p-4 rounded shadow flex justify-between">
                <div>
                  <div className="font-bold">Plan: {h.planName || h.planId}</div>
                  <div className="text-sm text-gray-600">Mobile: {h.mobile}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">₹{h.amount}</div>
                  <div className="text-sm text-gray-500">{new Date(h.date).toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}
