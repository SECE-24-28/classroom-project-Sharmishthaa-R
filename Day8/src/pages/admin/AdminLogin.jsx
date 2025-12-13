import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiServices";

export default function AdminLogin(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try{
      const res = await service.adminLogin(username,password);
      localStorage.setItem("adminToken", res.token);
      navigate("/admin/dashboard");
    }catch(err){
      setErr(err.message || "Admin login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={submit} className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Admin Login</h2>
        {err && <p className="text-red-500 mb-3">{err}</p>}
        <input className="p-3 border rounded w-full mb-3" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
        <input className="p-3 border rounded w-full mb-3" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full bg-red-600 text-white p-3 rounded">Login</button>
      </form>
    </div>
  );
}
