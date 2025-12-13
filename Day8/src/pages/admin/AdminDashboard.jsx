import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import service from "../../services/apiServices";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function AdminDashboard(){
  const [plans, setPlans] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [recharges, setRecharges] = useState([]);
  const [newPlanName, setNewPlanName] = useState("");
  const [newPlanPrice, setNewPlanPrice] = useState("");

  const loadAll = async () => {
    const p = await service.getPlans();
    const c = await service.getCustomers();
    const r = await service.getAllRecharges();
    setPlans(p); setCustomers(c); setRecharges(r);
  };

  useEffect(()=>{ loadAll(); }, []);

  const addPlan = async () => {
    if (!newPlanName || !newPlanPrice) { alert("enter name & price"); return; }
    const parts = newPlanName.split("|"); // simple input format "JIO|2GB/day|84 days"
    const planObj = { Network: parts[0]||newPlanName, Data: parts[1]||"", Validity: parts[2]||"", Calls: "Unlimited", Price: Number(newPlanPrice) || 0 };
    await service.addPlan(planObj);
    setNewPlanName(""); setNewPlanPrice("");
    loadAll();
  };

  const deletePlan = async (id) => {
    if(!confirm("Delete plan?")) return;
    await service.deletePlan(id);
    loadAll();
  };

  // prepare sales chart (aggregate by day)
  const chartData = (() => {
    const agg = {};
    recharges.forEach(r => {
      const d = r.date.slice(0,10);
      agg[d] = (agg[d] || 0) + (r.amount || 0);
    });
    return Object.keys(agg).slice(-10).map(k => ({ label: k, sales: agg[k] }));
  })();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-sm text-gray-500">Total Sales</div>
            <div className="text-2xl font-bold text-green-600">₹{recharges.reduce((a,b)=>a+(b.amount||0),0)}</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-sm text-gray-500">Customers</div>
            <div className="text-2xl font-bold text-blue-600">{customers.length}</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-sm text-gray-500">Plans</div>
            <div className="text-2xl font-bold text-purple-600">{plans.length}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-3">Sales Analysis</h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData.length ? chartData : [{label: 'none', sales: 0}]}>
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-3">Add Plan</h3>
            <div className="flex gap-2">
              <input value={newPlanName} onChange={e=>setNewPlanName(e.target.value)} placeholder="Network|Data|Validity (pipe-separated)" className="flex-1 p-2 border rounded" />
              <input value={newPlanPrice} onChange={e=>setNewPlanPrice(e.target.value)} placeholder="Price" className="w-28 p-2 border rounded" />
              <button onClick={addPlan} className="bg-green-600 text-white px-4 rounded">Add</button>
            </div>

            <h4 className="mt-4 font-bold">Existing Plans</h4>
            <div className="space-y-2 mt-2">
              {plans.map(p=>(
                <div key={p.id} className="flex justify-between items-center border p-2 rounded">
                  <div>
                    <div className="font-medium">{p.Network} — ₹{p.Price}</div>
                    <div className="text-sm text-gray-600">{p.Data} • {p.Validity}</div>
                  </div>
                  <button onClick={()=>deletePlan(p.id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-3">Customers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {customers.map(c=>(
              <div key={c.id} className="p-2 border rounded">
                <div className="font-medium">{c.name || "—"}</div>
                <div className="text-sm text-gray-600">{c.email || c.mobile}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
