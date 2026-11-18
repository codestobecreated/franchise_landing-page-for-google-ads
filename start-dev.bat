@echo off
REM Relux Electric - Next.js Development Server Startup Script
REM For Windows CMD

echo.
echo ================================
echo Relux Electric - EV Franchise
echo Next.js Development Server
echo ================================
echo.

REM Kill any existing Node processes
echo Checking for existing processes...
taskkill /F /IM node.exe /T 2>nul
timeout /t 1 /nobreak >nul

REM Navigate to project directory
cd /d "C:\Users\deepa\OneDrive\Desktop\relux landing page"

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

REM Start the development server
echo.
echo Starting Next.js development server...
echo Port: 3000
echo URL: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

echo.
echo Server stopped
pause
