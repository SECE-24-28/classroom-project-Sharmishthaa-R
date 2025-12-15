import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Wifi, 
  Phone, 
  MessageSquare, 
  Clock, 
  Star,
  Check,
  Zap
} from 'lucide-react';

const PlansPage: React.FC = () => {
  const [selectedOperator, setSelectedOperator] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const operators = [
    { id: 'all', name: 'All Operators' },
    { id: 'airtel', name: 'Airtel' },
    { id: 'jio', name: 'Jio' },
    { id: 'vi', name: 'Vi' },
    { id: 'bsnl', name: 'BSNL' }
  ];

  const categories = [
    { id: 'all', name: 'All Plans' },
    { id: 'popular', name: 'Popular' },
    { id: 'data', name: 'Data Plans' },
    { id: 'unlimited', name: 'Unlimited' },
    { id: 'talktime', name: 'Talktime' }
  ];

  const plans = [
    {
      id: 1,
      operator: 'airtel',
      category: 'popular',
      price: 299,
      validity: '28 days',
      data: '2GB/day',
      calls: 'Unlimited',
      sms: '100/day',
      features: ['Disney+ Hotstar Mobile', 'Airtel Xstream Premium'],
      popular: true
    },
    {
      id: 2,
      operator: 'jio',
      category: 'unlimited',
      price: 399,
      validity: '28 days',
      data: '2.5GB/day',
      calls: 'Unlimited',
      sms: '100/day',
      features: ['JioTV', 'JioCinema', 'JioSaavn Pro'],
      popular: true
    },
    {
      id: 3,
      operator: 'vi',
      category: 'data',
      price: 249,
      validity: '28 days',
      data: '1.5GB/day',
      calls: 'Unlimited',
      sms: '100/day',
      features: ['Vi Movies & TV', 'Weekend Data Rollover'],
      popular: false
    },
    {
      id: 4,
      operator: 'airtel',
      category: 'unlimited',
      price: 549,
      validity: '56 days',
      data: '2GB/day',
      calls: 'Unlimited',
      sms: '100/day',
      features: ['Disney+ Hotstar Mobile', 'Wynk Music', 'Free Hellotunes'],
      popular: false
    },
    {
      id: 5,
      operator: 'jio',
      category: 'data',
      price: 199,
      validity: '23 days',
      data: '1.5GB/day',
      calls: 'Unlimited',
      sms: '100/day',
      features: ['JioTV', 'JioCinema'],
      popular: false
    },
    {
      id: 6,
      operator: 'bsnl',
      category: 'talktime',
      price: 99,
      validity: '18 days',
      data: '2GB',
      calls: '200 mins',
      sms: '100',
      features: ['BSNL Tunes', 'Location Based Services'],
      popular: false
    }
  ];

  const filteredPlans = plans.filter(plan => {
    const operatorMatch = selectedOperator === 'all' || plan.operator === selectedOperator;
    const categoryMatch = selectedCategory === 'all' || plan.category === selectedCategory;
    return operatorMatch && categoryMatch;
  });

  const handleRecharge = (plan: any) => {
    alert(`Recharging with ${plan.operator.toUpperCase()} plan of ₹${plan.price}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best mobile recharge plans from all major operators with exclusive offers and benefits
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="card p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Operator Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Operator
                </label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {operators.map((operator) => (
                    <motion.button
                      key={operator.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedOperator(operator.id)}
                      className={`p-3 rounded-lg border-2 transition-all text-center ${
                        selectedOperator === operator.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="text-xs font-medium">{operator.name}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Plan Category
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`p-3 rounded-lg border-2 transition-all text-center ${
                        selectedCategory === category.id
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="text-sm font-medium">{category.name}</div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card p-6 relative ${plan.popular ? 'ring-2 ring-primary-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Popular</span>
                  </div>
                </div>
              )}

              {/* Operator */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="font-semibold text-gray-900 capitalize">
                    {plan.operator}
                  </span>
                </div>
                <div className="text-3xl font-bold text-primary-600">
                  ₹{plan.price}
                </div>
              </div>

              {/* Plan Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">Validity: {plan.validity}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">Data: {plan.data}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">Calls: {plan.calls}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">SMS: {plan.sms}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                <div className="space-y-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recharge Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleRecharge(plan)}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Zap className="h-5 w-5" />
                <span>Recharge Now</span>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {filteredPlans.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Smartphone className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No plans found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more plans</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PlansPage;