function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-900">
        <h1 className="text-xl font-bold">RechargeX</h1>
        <div className="space-x-4">
          <a href="#">Home</a>
          <a href="#">Plans</a>
          <a href="#">Login</a>
          <a href="#">Signup</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Fast & Secure Mobile Recharge</h2>
        <p className="max-w-xl text-lg mb-8">
          Recharge your prepaid mobile with the latest plans, instant payment, and secure transactions — all in one place.
        </p>
        <div className="grid gap-6 md:grid-cols-3 text-left">
          <div>
            <h3 className="font-semibold text-xl">Instant Recharge</h3>
            <p>Fastest recharge experience with instant payment confirmation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Latest Plans</h3>
            <p>Always updated prepaid plans from all operators.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Secure Payments</h3>
            <p>Encrypted transactions for safe recharges.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-900 text-sm">
        © 2025 RechargeX. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;