const fs = require("fs");
const path = require("path");

// ANSI colors
const RESET = "\x1b[0m";
const BLUE = "\x1b[34m";     // directories
const GREEN = "\x1b[32m";    // .ts, .tsx
const CYAN = "\x1b[36m";     // .json, .md
const YELLOW = "\x1b[33m";   // .js

// Folders to ignore
const IGNORE = ["node_modules", ".git", ".next", "dist", ".turbo", ".DS_Store"];

// Icons
const FOLDER_ICON = "📁";
const FILE_ICON = "📄";

// Better icons by type
function getIcon(fileName, isDir) {
  if (isDir) return "📁";
  if (fileName.endsWith(".md")) return "📝";
  if (fileName.endsWith(".sh")) return "🔧";
  if (fileName.endsWith(".json")) return "🧾";
  if (fileName.endsWith(".ts") || fileName.endsWith(".tsx")) return "📘";
  if (fileName.endsWith(".js")) return "🟨";
  return "📄";
}

function colorize(fileName, isDir) {
  if (isDir) return BLUE + fileName + RESET;
  if (fileName.endsWith(".ts") || fileName.endsWith(".tsx")) return GREEN + fileName + RESET;
  if (fileName.endsWith(".js")) return YELLOW + fileName + RESET;
  if (fileName.endsWith(".json") || fileName.endsWith(".md")) return CYAN + fileName + RESET;
  return fileName;
}

function printTree(dir, indent = "") {
  const items = fs.readdirSync(dir).filter(item => !IGNORE.includes(item));

  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    const isDir = stat.isDirectory();
    const icon = getIcon(item, isDir);
    console.log(`${indent}${icon} ${colorize(item, isDir)}`);
    if (isDir) printTree(fullPath, indent + "   ");
  });
}

// Entry point
const baseDir = process.argv[2] || ".";
printTree(path.resolve(baseDir));



// ✅ 2. Make It Executable

// ( chmod +x scripts/tree.js ) or 
// node scripts/tree.js
