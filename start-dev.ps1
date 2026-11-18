# Relux Electric - Next.js Development Server Startup Script

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Relux Electric - EV Franchise" -ForegroundColor Green
Write-Host "Next.js Development Server" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Kill any existing Node processes on port 3000
Write-Host "Checking for existing processes on port 3000..." -ForegroundColor Yellow
Get-Process | Where-Object { $_.ProcessName -like "*node*" -or $_.ProcessName -like "*npm*" } | ForEach-Object {
    Write-Host "Stopping $_" -ForegroundColor Yellow
    Stop-Process -Force -ErrorAction SilentlyContinue
}

Start-Sleep -Milliseconds 1000

# Navigate to project directory
$projectPath = "C:\Users\deepa\OneDrive\Desktop\relux landing page"
Set-Location $projectPath

# Check if node_modules exists
if (-Not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Start the development server
Write-Host ""
Write-Host "Starting Next.js development server..." -ForegroundColor Cyan
Write-Host "Port: 3000" -ForegroundColor Green
Write-Host "URL: http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

npm run dev

Write-Host ""
Write-Host "Server stopped" -ForegroundColor Red
