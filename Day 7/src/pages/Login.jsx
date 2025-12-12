import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center py-16">
        <form className="bg-white p-10 rounded-2xl shadow-xl w-96">
          <h2 className="text-3xl font-bold text-center mb-4 text-purple-700">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-4"
          />

          <button className="bg-purple-700 text-white w-full py-3 rounded-lg">
            Login
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
