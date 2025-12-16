const express = require('express');
const {
  getOperators,
  getPlans,
  initiateRecharge,
  getTransactionHistory
} = require('../controllers/rechargeController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/operators', getOperators);
router.get('/plans', getPlans);
router.post('/initiate', protect, initiateRecharge);
router.get('/transactions', protect, getTransactionHistory);

module.exports = router;