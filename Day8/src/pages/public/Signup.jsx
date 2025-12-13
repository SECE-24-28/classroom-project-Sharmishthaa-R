import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import service from "../../services/apiServices";
import { useNavigate } from "react-router-dom";

export default function Signup(){
  const [form,setForm] = useState({ name:"", email:"", mobile:"", password:"" });
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    if (!form.name || form.name.length<3) return "Enter a valid name";
    if (!/^[6-9]\d{9}$/.test(form.mobile)) return "Enter valid mobile";
    if (!form.email.includes("@")) return "Email invalid";
    if (form.password.length < 6) return "Password 6+ chars";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const v = validate(); if (v){ setError(v); return; }
    try{
      await service.signup(form);
      alert("Signup success — you can login");
      navigate("/login");
    }catch(err){
      setError(err.message || "Signup failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Create Account</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input className="p-3 border rounded" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
          <input className="p-3 border rounded" placeholder="Mobile" value={form.mobile} onChange={e=>setForm({...form,mobile:e.target.value})}/>
          <input className="p-3 border rounded" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
          <input type="password" className="p-3 border rounded" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/>
          <button className="mt-3 bg-purple-600 text-white p-3 rounded">Signup</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
