@echo off
echo Installing VS Code extensions...
FOR /F "tokens=*" %%i IN (..\vscode-extensions.txt) DO code --install-extension %%i
echo Done.
