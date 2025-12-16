const Operator = require('../models/Operator');
const Plan = require('../models/Plan');
const Transaction = require('../models/Transaction');

const getOperators = async (req, res) => {
  try {
    const operators = await Operator.find({ isActive: true });
    res.json(operators);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPlans = async (req, res) => {
  try {
    const { operator } = req.query;
    const filter = { isActive: true };
    
    if (operator) {
      filter.operator = operator;
    }

    const plans = await Plan.find(filter).populate('operator');
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const initiateRecharge = async (req, res) => {
  try {
    const { phoneNumber, operatorId, planId, amount } = req.body;
    const userId = req.user.id;

    const transactionId = 'TXN' + Date.now() + Math.random().toString(36).substr(2, 9);

    const transaction = await Transaction.create({
      user: userId,
      phoneNumber,
      operator: operatorId,
      plan: planId,
      amount,
      transactionId,
      status: 'success' // Mock success for demo
    });

    res.status(201).json({
      transactionId: transaction.transactionId,
      status: transaction.status,
      message: 'Recharge completed successfully'
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTransactionHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const { page = 1, limit = 10 } = req.query;

    const transactions = await Transaction.find({ user: userId })
      .populate('operator')
      .populate('plan')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getOperators,
  getPlans,
  initiateRecharge,
  getTransactionHistory
};