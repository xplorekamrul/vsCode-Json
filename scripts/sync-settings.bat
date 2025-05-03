@echo off
echo Copying settings...
xcopy "..\settings\settings.json" "%APPDATA%\Code\User\" /Y
xcopy "..\settings\keybindings.json" "%APPDATA%\Code\User\" /Y
echo Settings synced.
