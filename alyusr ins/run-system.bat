@echo off
setlocal

cd /d "%~dp0"
set PORT=5173
set URL=http://localhost:%PORT%/

powershell -NoProfile -ExecutionPolicy Bypass -Command "if (Get-NetTCPConnection -LocalPort %PORT% -ErrorAction SilentlyContinue) { exit 0 } else { exit 1 }"
if "%ERRORLEVEL%"=="0" goto open_browser

where py >nul 2>nul
if "%ERRORLEVEL%"=="0" (
  start "Al Yusr Insurance Demo Server" /min py -m http.server %PORT%
  goto wait_server
)

where python >nul 2>nul
if "%ERRORLEVEL%"=="0" (
  start "Al Yusr Insurance Demo Server" /min python -m http.server %PORT%
  goto wait_server
)

echo Python is required to run this frontend demo.
echo Install Python, then run this file again.
pause
exit /b 1

:wait_server
timeout /t 2 >nul

:open_browser
start "" "%URL%"
echo Al Yusr Insurance Demo is running at:
echo %URL%
echo The demo intro page will open automatically.
echo.
echo Keep this window open if you want to see this message.
pause
