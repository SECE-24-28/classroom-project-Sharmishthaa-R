const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const rechargeRoutes = require('./routes/recharge');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api', rechargeRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'RechargeHub API is running!' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});