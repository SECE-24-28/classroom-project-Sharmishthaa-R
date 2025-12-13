
// src/api/mockApi.js
// Simple mock backend storing data in localStorage. Returns Promises to simulate network.

const LS_KEY = "rechargex_db_v1";

function loadDB() {
  const raw = localStorage.getItem(LS_KEY);
  if (!raw) {
    const seed = {
      plans: [
        { id: 1, Network: "JIO", Data: "2GB/day", Validity: "84 days", Calls: "Unlimited", Price: 799 },
        { id: 2, Network: "Airtel", Data: "1.5GB/day", Validity: "56 days", Calls: "Unlimited", Price: 599 },
        { id: 3, Network: "VI", Data: "3GB/day", Validity: "28 days", Calls: "Unlimited + OTT", Price: 499 },
        { id: 4, Network: "BSNL", Data: "1GB/day", Validity: "30 days", Calls: "Unlimited", Price: 199 },
      ],
      users: [
        { id: 1, name: "Demo User", email: "user@demo.com", password: "user123", mobile: "9000000001", role: "user" },
      ],
      admin: { username: "admin", password: "admin123", token: "admintoken" },
      recharges: []
    };
    localStorage.setItem(LS_KEY, JSON.stringify(seed));
    return seed;
  }
  return JSON.parse(raw);
}

function saveDB(db) {
  localStorage.setItem(LS_KEY, JSON.stringify(db));
}

function delay(ms=400){ return new Promise(r=>setTimeout(r, ms)); }

export default {
  async getPlans(){
    await delay();
    const db = loadDB();
    return db.plans;
  },

  async addPlan(plan){
    await delay();
    const db = loadDB();
    const id = db.plans.length ? Math.max(...db.plans.map(p=>p.id))+1 : 1;
    const newPlan = { id, ...plan };
    db.plans.push(newPlan);
    saveDB(db);
    return newPlan;
  },

  async deletePlan(id){
    await delay();
    const db = loadDB();
    db.plans = db.plans.filter(p=>p.id !== Number(id));
    saveDB(db);
    return { ok: true };
  },

  async signup(user){
    await delay();
    const db = loadDB();
    if (db.users.find(u=>u.email === user.email)) throw new Error("Email already exists");
    const id = db.users.length ? Math.max(...db.users.map(u=>u.id))+1 : 1;
    const newUser = { id, ...user, role: "user" };
    db.users.push(newUser);
    saveDB(db);
    return { user: newUser };
  },

  async login(email, password){
    await delay();
    const db = loadDB();
    const user = db.users.find(u=>u.email === email && u.password === password);
    if (!user) throw new Error("Invalid credentials");
    // return a simple token (for demo) and user
    return { token: "usertoken-"+user.id, user };
  },

  async adminLogin(username, password){
    await delay();
    const db = loadDB();
    if (username === db.admin.username && password === db.admin.password) {
      return { token: db.admin.token };
    }
    throw new Error("Invalid admin credentials");
  },

  async recharge({ mobile, planId, amount, userId }){
    await delay();
    const db = loadDB();
    const id = db.recharges.length ? Math.max(...db.recharges.map(r=>r.id))+1 : 1;
    const plan = db.plans.find(p=>p.id === Number(planId));
    const rec = { id, mobile, planId: Number(planId), amount: Number(amount), date: new Date().toISOString(), planName: plan?.Network || "", userId: userId || null };
    db.recharges.push(rec);
    // add customer if not exist
    if (!db.users.find(u=>u.mobile === mobile)) {
      db.users.push({ id: db.users.length+1, name: null, email: null, password: null, mobile, role: "user" });
    }
    saveDB(db);
    return rec;
  },

  async getUserRecharges(userId){
    await delay();
    const db = loadDB();
    return db.recharges.filter(r=>r.userId === Number(userId));
  },

  async getAllRecharges(){
    await delay();
    const db = loadDB();
    return db.recharges;
  },

  async getCustomers(){
    await delay();
    const db = loadDB();
    return db.users;
  }
};
