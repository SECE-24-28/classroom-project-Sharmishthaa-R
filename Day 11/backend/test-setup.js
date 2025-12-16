const mongoose = require('mongoose');
require('dotenv').config();

const testConnection = async () => {
  try {
    console.log('Testing MongoDB connection...');
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rechargehub');
    console.log('✅ MongoDB connection successful!');
    
    console.log('Testing models...');
    const User = require('./models/User');
    const Operator = require('./models/Operator');
    const Plan = require('./models/Plan');
    const Transaction = require('./models/Transaction');
    
    console.log('✅ All models loaded successfully!');
    console.log('✅ Backend setup is complete and working!');
    
    await mongoose.connection.close();
    console.log('Connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Setup test failed:', error.message);
    process.exit(1);
  }
};

testConnection();