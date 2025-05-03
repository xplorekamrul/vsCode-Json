@echo off
echo Running full VS Code setup...

:: Resolve absolute root directory (with quotes for space handling)
set "ROOT=%~dp0.."
cd /d "%ROOT%"
for %%I in (.) do set "ROOT=%%~fI"

:: 1. Install Extensions
echo Installing VS Code extensions...
for /f "usebackq delims=" %%e in ("%ROOT%\vscode-extensions.txt") do (
    code --install-extension %%e >nul 2>&1
)
echo Done.

:: 2. Copy Settings
echo Copying settings...
xcopy "%ROOT%\settings\settings.json" "%APPDATA%\Code\User\" /Y >nul
xcopy "%ROOT%\settings\keybindings.json" "%APPDATA%\Code\User\" /Y >nul
echo Settings synced.

echo All done! ✔️
pause


@REM to run this scripts 

@REM ( scripts\setup.bat )