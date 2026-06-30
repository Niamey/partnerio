@echo off
cd /d "%~dp0"
echo.
echo  Partnerio - zapusk servera
echo  ==========================
echo.
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :8000 ^| findstr LISTENING') do (
  echo  Zupynka starogo procesu na portu 8000 PID %%a ...
  taskkill /F /PID %%a >nul 2>&1
)
python server.py
if errorlevel 1 (
  echo.
  echo  Port 8000 zaynyatyy. Sprobujte: python server.py 8010
  pause
)
