import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <div
        className="h-[520px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="bg-black/40 p-6 rounded-xl">
          <h1 className="text-5xl text-white font-extrabold">Fast, Secure & Smart Mobile Recharge</h1>
          <p className="text-gray-200 mt-3 max-w-2xl">Recharge your prepaid mobile with instant payment & secure transactions.</p>
        </div>
      </div>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-700">Why RechargeX?</h2>
          <p className="mt-3 text-gray-700">Latest plans, secure payments, instant confirmation.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
