export default function Navbar() {
  return (
    <nav className="w-full bg-purple-700 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">RechargeX</h1>

      <div className="space-x-6 text-lg">
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">Plans</span>
        <span className="cursor-pointer">Login</span>
        <span className="cursor-pointer">Signup</span>
      </div>
    </nav>
  );
}
