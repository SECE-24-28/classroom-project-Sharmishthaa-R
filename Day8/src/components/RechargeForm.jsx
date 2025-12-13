export default function RechargeForm() {
  return (
    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Recharge Your Number</h2>

      <form className="flex flex-col gap-4">

        <input type="text" placeholder="Mobile Number"
          className="p-3 border rounded-xl" />

        <select className="p-3 border rounded-xl">
          <option>Select Operator</option>
          <option>JIO</option>
          <option>Airtel</option>
          <option>Vi</option>
        </select>

        <select className="p-3 border rounded-xl">
          <option>Select Plan</option>
        </select>

        <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl mt-3">
          Proceed to Pay
        </button>
      </form>
    </div>
  );
}
