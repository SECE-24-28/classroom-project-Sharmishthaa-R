# 🚀 How to Run Mobile Recharge Website

## 📂 Open in VS Code

### Method 1: Using Command Line
```bash
# Navigate to project directory
cd C:\Users\sharm\mobile-recharge-website

# Open in VS Code
code .
```

### Method 2: Using File Explorer
1. Navigate to `C:\Users\sharm\mobile-recharge-website`
2. Right-click in the folder
3. Select "Open with Code"

### Method 3: Using Setup Script
```bash
# Double-click the setup-and-run.bat file
# OR run in terminal:
setup-and-run.bat
```

## 🔧 Terminal Commands (Run in VS Code Terminal)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

### 3. Build for Production
```bash
npm run build
```

### 4. Run Tests
```bash
npm test
```

## 🌐 Access the Website

After running `npm start`, the website will be available at:
**http://localhost:3000**

## 📱 Demo Credentials

- **Email**: demo@rechargehub.com
- **Password**: demo123

## 📋 Project Structure

```
mobile-recharge-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── LoadingSpinner.tsx
│   ├── pages/
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SignUpPage.tsx
│   │   ├── HomePage.tsx
│   │   └── PlansPage.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── services/
│   │   └── api.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎯 Key Features

✅ **Landing Page** - Hero section with mobile recharge theme
✅ **Authentication** - Login/Signup with validation
✅ **Home Dashboard** - Recharge form and quick actions
✅ **Plans Page** - Browse and filter recharge plans
✅ **Responsive Design** - Works on all devices
✅ **Smooth Animations** - Framer Motion powered
✅ **Modern UI** - Tailwind CSS styling

## 🔥 Quick Start Commands

```bash
# 1. Open VS Code
code .

# 2. Install dependencies
npm install

# 3. Start the server
npm start

# 4. Open browser to http://localhost:3000
```

## 🛠️ Troubleshooting

### If npm install fails:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rmdir /s node_modules
npm install
```

### If port 3000 is busy:
```bash
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or use different port
set PORT=3001 && npm start
```

### If Tailwind CSS not working:
```bash
# Rebuild Tailwind
npm run build:css
```

## 📞 Support

If you encounter any issues:
1. Check the terminal for error messages
2. Ensure Node.js 16+ is installed
3. Verify all dependencies are installed
4. Check the browser console for errors