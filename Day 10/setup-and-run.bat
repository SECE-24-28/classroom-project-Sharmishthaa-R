@echo off
echo 🚀 Mobile Recharge Website Setup & Run
echo =====================================

echo 📂 Opening project in VS Code...
code .

echo ⏳ Waiting for VS Code to load...
timeout /t 3 /nobreak >nul

echo 📦 Installing dependencies...
npm install

echo 🎯 Starting development server...
echo.
echo 🌐 The website will open at: http://localhost:3000
echo.
echo 📋 Demo Credentials:
echo    Email: demo@rechargehub.com
echo    Password: demo123
echo.
echo 🔧 Press Ctrl+C to stop the server
echo.

npm start