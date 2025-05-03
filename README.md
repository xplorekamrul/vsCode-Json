# ⚙️ VS Code Environment Setup

Easily sync your Visual Studio Code extensions, settings, and keybindings across multiple machines — Windows, macOS, or Linux.

---

## 📁 Folder Structure

```
📁 your-repo/
├── 📄 README.md
├── 📁 scripts/
│   ├── install-extensions.bat     # Install extensions (Windows)
│   ├── sync-settings.bat          # Copy settings (Windows)
│   ├── setup.bat                  # Run everything at once (Windows)
│   └── tree.js                    # Show folder tree in terminal
├── 📁 settings/
│   ├── settings.json              # VS Code user settings
│   └── keybindings.json           # VS Code keybindings
├── 📄 vscode-extensions.txt       # List of all VS Code extensions
```

---

## 🚀 Setup Instructions

### 🔧 1. Clone the Repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 🪟 2. Windows Users

Run this to install everything:

```bash
scripts\setup.bat
```

### 💻 3. Linux/macOS Users (optional)

You can create `.sh` versions of the `.bat` files if you're on Unix-based systems.

---

## 📦 What This Does

- ✅ Installs all extensions listed in `vscode-extensions.txt`
- ✅ Copies your `settings.json` and `keybindings.json` to the correct VS Code user directory
- ✅ Helps visualize folder structure via `tree.js`

---

## 📂 See Your Folder Structure

```bash
node scripts/tree.js
```

---

## 🧠 Tip

Update your `vscode-extensions.txt` by exporting current extensions:

```bash
code --list-extensions > vscode-extensions.txt
```

---

## 🔗 License

MIT © Your Name