import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import service from "../../services/apiServices";

export default function Login(){
  const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const [error,setError]=useState(""); const navigate=useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (!email || !password) { setError("Enter credentials"); return; }
    try{
      const res = await service.login(email,password);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      alert("Login success");
      navigate("/");
    }catch(err){
      setError(err.message || "Login failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">User Login</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input className="p-3 border rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
          <input className="p-3 border rounded" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
          <button className="mt-3 bg-purple-600 text-white p-3 rounded">Login</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
