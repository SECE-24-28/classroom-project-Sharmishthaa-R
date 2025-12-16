import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const authAPI = {
  login: (credentials: { email: string; password: string; role?: string }) =>
    api.post('/auth/login', credentials),
  
  register: (userData: any) =>
    api.post('/auth/register', userData),
  
  logout: () =>
    api.post('/auth/logout'),
  
  refreshToken: () =>
    api.post('/auth/refresh'),
};

export const rechargeAPI = {
  getOperators: () =>
    api.get('/operators'),
  
  getPlans: (operatorId?: string) =>
    api.get(`/plans${operatorId ? `?operator=${operatorId}` : ''}`),
  
  initiateRecharge: (rechargeData: {
    phoneNumber: string;
    operatorId: string;
    planId: string;
    amount: number;
  }) =>
    api.post('/initiate', rechargeData),
  
  getRechargeStatus: (transactionId: string) =>
    api.get(`/recharge/status/${transactionId}`),
  
  getTransactionHistory: (page = 1, limit = 10) =>
    api.get(`/transactions?page=${page}&limit=${limit}`),
};

export const userAPI = {
  getProfile: () =>
    api.get('/user/profile'),
  
  updateProfile: (profileData: any) =>
    api.put('/user/profile', profileData),
  
  getWallet: () =>
    api.get('/user/wallet'),
  
  addMoney: (amount: number) =>
    api.post('/user/wallet/add', { amount }),
};

export const offersAPI = {
  getOffers: () =>
    api.get('/offers'),
  
  getOfferDetails: (offerId: string) =>
    api.get(`/offers/${offerId}`),
  
  applyOffer: (offerId: string, rechargeData: any) =>
    api.post(`/offers/${offerId}/apply`, rechargeData),
};

// Mock API responses for development
export const mockAPI = {
  login: async (credentials: { email: string; password: string }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      data: {
        token: 'mock-jwt-token',
        user: {
          id: '1',
          name: 'John Doe',
          email: credentials.email,
          phone: '+1234567890'
        }
      }
    };
  },

  getPlans: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      data: [
        {
          id: '1',
          operator: 'airtel',
          price: 299,
          validity: '28 days',
          data: '2GB/day',
          calls: 'Unlimited',
          sms: '100/day',
          features: ['Disney+ Hotstar Mobile', 'Airtel Xstream Premium']
        },
        // Add more mock plans...
      ]
    };
  },

  initiateRecharge: async (rechargeData: any) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {
      data: {
        transactionId: 'TXN' + Date.now(),
        status: 'success',
        message: 'Recharge completed successfully'
      }
    };
  }
};

export default api;