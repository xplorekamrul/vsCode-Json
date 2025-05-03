@echo off
echo Running full VS Code setup...

call scripts\install-extensions.bat
call scripts\sync-settings.bat

echo All done! ✅
pause



@REM to run this scripts 

@REM ( scripts\setup.bat )