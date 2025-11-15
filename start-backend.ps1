Write-Host "Starting Backend Server..." -ForegroundColor Green
Write-Host ""

Set-Location $PSScriptRoot\backend

# Check if MongoDB is running
Write-Host "Checking MongoDB connection..." -ForegroundColor Yellow

# Start the server
Write-Host "Starting server on port 5000..." -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Cyan
Write-Host ""

node server.js

