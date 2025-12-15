import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  CreditCard, 
  History, 
  Gift, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const HomePage: React.FC = () => {
  const { user } = useAuth();
  const [rechargeData, setRechargeData] = useState({
    phoneNumber: '',
    operator: '',
    amount: '',
    plan: ''
  });

  const operators = [
    { id: 'airtel', name: 'Airtel' },
    { id: 'jio', name: 'Jio' },
    { id: 'vi', name: 'Vi (Vodafone Idea)' },
    { id: 'bsnl', name: 'BSNL' }
  ];

  const quickAmounts = [50, 100, 200, 500, 1000];

  const recentTransactions = [
    { id: 1, number: '+91 98765 43210', amount: 299, operator: 'Airtel', date: '2024-01-15', status: 'Success' },
    { id: 2, number: '+91 87654 32109', amount: 199, operator: 'Jio', date: '2024-01-14', status: 'Success' },
    { id: 3, number: '+91 76543 21098', amount: 399, operator: 'Vi', date: '2024-01-13', status: 'Success' }
  ];

  const handleRecharge = () => {
    // Simulate recharge process
    alert(`Recharging ${rechargeData.phoneNumber} with ₹${rechargeData.amount} for ${rechargeData.operator}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-gray-600">Ready to recharge your mobile? Let's get started!</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recharge Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6 mb-8"
            >
              <div className="flex items-center mb-6">
                <Smartphone className="h-6 w-6 text-primary-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Mobile Recharge</h2>
              </div>

              <div className="space-y-6">
                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={rechargeData.phoneNumber}
                    onChange={(e) => setRechargeData({...rechargeData, phoneNumber: e.target.value})}
                    className="input-field"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

                {/* Operator Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Operator
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {operators.map((operator) => (
                      <motion.button
                        key={operator.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setRechargeData({...rechargeData, operator: operator.name})}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          rechargeData.operator === operator.name
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="text-sm font-medium">{operator.name}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recharge Amount
                  </label>
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {quickAmounts.map((amount) => (
                      <motion.button
                        key={amount}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setRechargeData({...rechargeData, amount: amount.toString()})}
                        className={`py-2 px-3 rounded-lg border-2 transition-all ${
                          rechargeData.amount === amount.toString()
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        ₹{amount}
                      </motion.button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={rechargeData.amount}
                    onChange={(e) => setRechargeData({...rechargeData, amount: e.target.value})}
                    className="input-field"
                    placeholder="Or enter custom amount"
                  />
                </div>

                {/* Recharge Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleRecharge}
                  disabled={!rechargeData.phoneNumber || !rechargeData.operator || !rechargeData.amount}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Zap className="h-5 w-5" />
                  <span>Recharge Now</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Recent Transactions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-center mb-6">
                <History className="h-6 w-6 text-primary-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Recent Transactions</h2>
              </div>

              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <Smartphone className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{transaction.number}</div>
                        <div className="text-sm text-gray-500">{transaction.operator} • {transaction.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">₹{transaction.amount}</div>
                      <div className="flex items-center text-sm text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <CreditCard className="h-5 w-5 text-primary-600" />
                  <span>View Plans</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <Gift className="h-5 w-5 text-primary-600" />
                  <span>Special Offers</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <History className="h-5 w-5 text-primary-600" />
                  <span>Transaction History</span>
                </button>
              </div>
            </motion.div>

            {/* Offers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Special Offers</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Gift className="h-5 w-5 text-primary-600 mr-2" />
                    <span className="font-semibold text-primary-700">Cashback Offer</span>
                  </div>
                  <p className="text-sm text-gray-600">Get 10% cashback on recharges above ₹200</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-secondary-50 to-primary-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Zap className="h-5 w-5 text-secondary-600 mr-2" />
                    <span className="font-semibold text-secondary-700">Double Data</span>
                  </div>
                  <p className="text-sm text-gray-600">Get double data on weekend recharges</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;