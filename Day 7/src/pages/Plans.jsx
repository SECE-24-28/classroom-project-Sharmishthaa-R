import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Plans() {
  const plans = [
    { Network: "JIO", Data: "1.5GB/day", Validity: "28 days", Price: 299 },
    { Network: "Airtel", Data: "2GB/day", Validity: "56 days", Price: 549 },
    { Network: "VI", Data: "1GB/day", Validity: "84 days", Price: 719 },
  ];

  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        {plans.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-xl text-center">
            <h2 className="text-xl font-bold text-purple-700">{p.Network}</h2>
            <p className="mt-3">{p.Data}</p>
            <p>{p.Validity}</p>
            <p className="font-bold text-2xl mt-4 text-green-600">₹{p.Price}</p>

            <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-lg">
              Recharge Now
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
