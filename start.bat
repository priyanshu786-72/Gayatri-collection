@echo off
echo Starting Gayatri Collection E-Commerce Platform...
echo.

echo [1/2] Starting Backend Server on port 5000...
start "Backend Server" cmd /k "cd backend && npm start"

timeout /t 3 /nobreak > nul

echo [2/2] Starting Frontend Server on port 8000...
start "Frontend Server" cmd /k "cd frontend && npx --yes http-server -p 8000"

timeout /t 3 /nobreak > nul

echo.
echo Opening browser...
start http://localhost:8000

echo.
echo ========================================
echo Servers are running!
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:8000
echo ========================================
echo.
echo Press any key to close this window...
pause > nul

