import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Zap, 
  Shield, 
  Clock, 
  Star, 
  ArrowRight,
  CheckCircle,
  Users,
  Award
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Recharge",
      description: "Recharge your mobile in seconds with our lightning-fast service"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Secure",
      description: "Bank-level security ensures your transactions are always safe"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Available",
      description: "Recharge anytime, anywhere with our round-the-clock service"
    }
  ];

  const stats = [
    { number: "10M+", label: "Happy Customers" },
    { number: "50M+", label: "Recharges Done" },
    { number: "99.9%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mobile-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Recharge Your
              <span className="block text-yellow-400">Mobile Instantly</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Fast, secure, and reliable mobile recharge service. 
              Get instant top-ups for all major networks with the best offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/signup"
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/plans"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                View Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose RechargeHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the fastest and most secure mobile recharge service with unmatched reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8 text-center group"
              >
                <div className="text-primary-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to recharge your mobile
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Enter Number", desc: "Enter your mobile number and select operator" },
              { step: "2", title: "Choose Plan", desc: "Select from our wide range of recharge plans" },
              { step: "3", title: "Pay & Done", desc: "Make secure payment and get instant recharge" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Join millions of satisfied customers and experience the fastest mobile recharge service
            </p>
            <Link
              to="/signup"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
            >
              Start Recharging Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;