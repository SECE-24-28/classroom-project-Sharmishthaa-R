import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Payment() {
  return (
    <>
      <Navbar />

      <div className="max-w-lg mx-auto bg-white p-10 mt-20 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-6">
          Payment Page
        </h1>

        <input
          type="text"
          placeholder="Enter Mobile Number"
          className="p-3 border rounded-xl w-full mb-4"
        />

        <button className="w-full bg-green-600 text-white text-lg py-3 rounded-xl shadow-lg">
          Pay Now
        </button>
      </div>

      <Footer />
    </>
  );
}
