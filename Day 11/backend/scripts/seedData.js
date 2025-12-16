const mongoose = require('mongoose');
require('dotenv').config();

const Operator = require('../models/Operator');
const Plan = require('../models/Plan');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rechargehub');
    console.log('MongoDB connected for seeding');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const seedOperators = async () => {
  const operators = [
    { name: 'Airtel', code: 'airtel', logo: '/images/airtel-logo.png' },
    { name: 'Jio', code: 'jio', logo: '/images/jio-logo.png' },
    { name: 'Vi', code: 'vi', logo: '/images/vi-logo.png' },
    { name: 'BSNL', code: 'bsnl', logo: '/images/bsnl-logo.png' }
  ];

  await Operator.deleteMany({});
  const createdOperators = await Operator.insertMany(operators);
  console.log('Operators seeded successfully');
  return createdOperators;
};

const seedPlans = async (operators) => {
  const plans = [
    {
      operator: operators[0]._id, // Airtel
      price: 299,
      validity: '28 days',
      data: '2GB/day',
      calls: 'Unlimited',
      sms: '100/day',
      features: ['Disney+ Hotstar Mobile', 'Airtel Xstream Premium']
    },
    {
      operator: operators[1]._id, // Jio
      price: 349,
      validity: '28 days',
      data: '2GB/day',
      calls: 'Unlimited',
      sms: '100/day',
      features: ['JioTV', 'JioCinema', 'JioSaavn']
    },
    {
      operator: operators[2]._id, // Vi
      price: 319,
      validity: '28 days',
      data: '2GB/day',
      calls: 'Unlimited',
      sms: '100/day',
      features: ['Vi Movies & TV', 'Weekend Data Rollover']
    }
  ];

  await Plan.deleteMany({});
  await Plan.insertMany(plans);
  console.log('Plans seeded successfully');
};

const seedData = async () => {
  try {
    await connectDB();
    const operators = await seedOperators();
    await seedPlans(operators);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedData();