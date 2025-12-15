import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, BarChart3, Users, CreditCard, TrendingUp } from 'lucide-react';

interface Plan {
  id: string;
  operator: string;
  amount: number;
  validity: string;
  description: string;
  type: string;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [plans, setPlans] = useState<Plan[]>([
    { id: '1', operator: 'Airtel', amount: 199, validity: '28 days', description: '1.5GB/day', type: 'Data' },
    { id: '2', operator: 'Jio', amount: 299, validity: '28 days', description: '2GB/day', type: 'Data' },
    { id: '3', operator: 'Vi', amount: 149, validity: '28 days', description: '1GB/day', type: 'Data' },
  ]);
  const [showAddPlan, setShowAddPlan] = useState(false);
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null);
  const [newPlan, setNewPlan] = useState({
    operator: '',
    amount: '',
    validity: '',
    description: '',
    type: 'Data'
  });

  const stats = [
    { title: 'Total Users', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { title: 'Total Recharges', value: '5,678', icon: CreditCard, color: 'bg-green-500' },
    { title: 'Revenue', value: '₹2,34,567', icon: TrendingUp, color: 'bg-purple-500' },
    { title: 'Active Plans', value: plans.length.toString(), icon: BarChart3, color: 'bg-orange-500' },
  ];

  const handleAddPlan = () => {
    if (newPlan.operator && newPlan.amount && newPlan.validity && newPlan.description) {
      const plan: Plan = {
        id: Date.now().toString(),
        operator: newPlan.operator,
        amount: parseInt(newPlan.amount),
        validity: newPlan.validity,
        description: newPlan.description,
        type: newPlan.type
      };
      setPlans([...plans, plan]);
      setNewPlan({ operator: '', amount: '', validity: '', description: '', type: 'Data' });
      setShowAddPlan(false);
    }
  };

  const handleEditPlan = (plan: Plan) => {
    setEditingPlan(plan);
    setNewPlan({
      operator: plan.operator,
      amount: plan.amount.toString(),
      validity: plan.validity,
      description: plan.description,
      type: plan.type
    });
    setShowAddPlan(true);
  };

  const handleUpdatePlan = () => {
    if (editingPlan && newPlan.operator && newPlan.amount && newPlan.validity && newPlan.description) {
      const updatedPlans = plans.map(plan =>
        plan.id === editingPlan.id
          ? {
              ...plan,
              operator: newPlan.operator,
              amount: parseInt(newPlan.amount),
              validity: newPlan.validity,
              description: newPlan.description,
              type: newPlan.type
            }
          : plan
      );
      setPlans(updatedPlans);
      setNewPlan({ operator: '', amount: '', validity: '', description: '', type: 'Data' });
      setShowAddPlan(false);
      setEditingPlan(null);
    }
  };

  const handleDeletePlan = (id: string) => {
    setPlans(plans.filter(plan => plan.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your recharge platform</p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {['overview', 'plans', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow p-6"
                >
                  <div className="flex items-center">
                    <div className={`${stat.color} rounded-lg p-3`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Plans Tab */}
        {activeTab === 'plans' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Manage Plans</h2>
              <button
                onClick={() => setShowAddPlan(true)}
                className="btn-primary flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add Plan</span>
              </button>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-lg shadow p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{plan.operator}</h3>
                      <p className="text-2xl font-bold text-blue-600">₹{plan.amount}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditPlan(plan)}
                        className="p-2 text-gray-400 hover:text-blue-600"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeletePlan(plan.id)}
                        className="p-2 text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Validity: {plan.validity}</p>
                    <p className="text-sm text-gray-600">Benefits: {plan.description}</p>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                      {plan.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold text-gray-900">Analytics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trend</h3>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  Chart placeholder - Revenue over time
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Popular Operators</h3>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  Chart placeholder - Operator usage
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Add/Edit Plan Modal */}
        {showAddPlan && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-6 w-full max-w-md mx-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {editingPlan ? 'Edit Plan' : 'Add New Plan'}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Operator</label>
                  <select
                    value={newPlan.operator}
                    onChange={(e) => setNewPlan({ ...newPlan, operator: e.target.value })}
                    className="input-field"
                  >
                    <option value="">Select Operator</option>
                    <option value="Airtel">Airtel</option>
                    <option value="Jio">Jio</option>
                    <option value="Vi">Vi</option>
                    <option value="BSNL">BSNL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                  <input
                    type="number"
                    value={newPlan.amount}
                    onChange={(e) => setNewPlan({ ...newPlan, amount: e.target.value })}
                    className="input-field"
                    placeholder="Enter amount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Validity</label>
                  <input
                    type="text"
                    value={newPlan.validity}
                    onChange={(e) => setNewPlan({ ...newPlan, validity: e.target.value })}
                    className="input-field"
                    placeholder="e.g., 28 days"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <input
                    type="text"
                    value={newPlan.description}
                    onChange={(e) => setNewPlan({ ...newPlan, description: e.target.value })}
                    className="input-field"
                    placeholder="e.g., 1.5GB/day"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    value={newPlan.type}
                    onChange={(e) => setNewPlan({ ...newPlan, type: e.target.value })}
                    className="input-field"
                  >
                    <option value="Data">Data</option>
                    <option value="Voice">Voice</option>
                    <option value="SMS">SMS</option>
                    <option value="Combo">Combo</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={editingPlan ? handleUpdatePlan : handleAddPlan}
                  className="btn-primary flex-1"
                >
                  {editingPlan ? 'Update Plan' : 'Add Plan'}
                </button>
                <button
                  onClick={() => {
                    setShowAddPlan(false);
                    setEditingPlan(null);
                    setNewPlan({ operator: '', amount: '', validity: '', description: '', type: 'Data' });
                  }}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;