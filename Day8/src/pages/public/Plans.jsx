import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PlanCard from "../../components/PlanCard";
import service from "../../services/apiServices";

export default function Plans(){
  const [plans, setPlans] = useState([]);

  useEffect(()=>{ service.getPlans().then(setPlans).catch(()=>setPlans([])); }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Recharge Plans</h1>

        <div className="flex flex-wrap gap-6">
          {plans.map(p=> <PlanCard key={p.id} plan={p} />)}
        </div>
      </div>
      <Footer />
    </>
  );
}
