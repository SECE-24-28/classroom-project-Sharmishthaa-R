// src/services/apiService.js
import mock from "../api/mockApi";

/*
 This service chooses mock implementation for now.
 If you have a real server, swap implementations to call api.get/post...
*/

export default {
  getPlans: async () => {
    // return axios-based: return api.get('/plans')
    return mock.getPlans();
  },

  addPlan: async (plan) => {
    return mock.addPlan(plan);
  },

  deletePlan: async (id) => {
    return mock.deletePlan(id);
  },

  signup: async (data) => {
    return mock.signup(data);
  },

  login: async (email, password) => {
    return mock.login(email, password);
  },

  adminLogin: async (username, password) => {
    return mock.adminLogin(username, password);
  },

  recharge: async (payload) => {
    return mock.recharge(payload);
  },

  getUserRecharges: async (userId) => { return mock.getUserRecharges(userId); },

  getAllRecharges: async () => mock.getAllRecharges(),

  getCustomers: async () => mock.getCustomers()
};
