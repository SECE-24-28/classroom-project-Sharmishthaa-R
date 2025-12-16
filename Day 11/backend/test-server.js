const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'RechargeHub API is running!' });
});

// Test operators route
app.get('/api/operators', (req, res) => {
  res.json([
    { _id: '1', name: 'Airtel', code: 'airtel', logo: '/images/airtel-logo.png' },
    { _id: '2', name: 'Jio', code: 'jio', logo: '/images/jio-logo.png' },
    { _id: '3', name: 'Vi', code: 'vi', logo: '/images/vi-logo.png' }
  ]);
});

// Test auth routes
app.post('/api/auth/register', (req, res) => {
  const { name, email, password, phone } = req.body;
  res.status(201).json({
    message: 'User registered successfully',
    user: { id: '123', name, email, phone },
    token: 'test-jwt-token'
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  res.json({
    message: 'Login successful',
    user: { id: '123', name: 'Test User', email, phone: '1234567890' },
    token: 'test-jwt-token'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});