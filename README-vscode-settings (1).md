# 📘 VS Code Custom Settings Guide (Bangla Explained)

এই README ফাইলে আপনি পাবেন একটি বিস্তারিত ব্যাখ্যা সহ VS Code `settings.json` কনফিগারেশন, যা আপনার ডেভেলপমেন্ট অভিজ্ঞতা আরও উন্নত করবে।

---

## 🔧 ফিচারসমূহ

### ✏️ এডিটর সেটিংস
- **Linked Editing**: HTML/XML এর ট্যাগের শুরু ও শেষ একসাথে এডিট হবে
- **Auto Save**: স্বয়ংক্রিয়ভাবে ফাইল সেভ হবে ১০০ মিলিসেকেন্ড পরে
- **Tab Size**: ৩ স্পেস ব্যবহার
- **Word Wrap**: লাইন বেশি বড় হলে নিজে থেকেই নিচে যাবে
- **Formatter**: Prettier ব্যবহৃত হবে TS, TSX, JS, JSX ফরম্যাটিংয়ের জন্য

### 🧠 AI এবং IntelliSense
- **Cody AI ও Inline Suggestions**: সাজেশন অটো এডিটে আসবে
- **Error Lens**: ভুল হলে সাথে সাথে লাইন হাইলাইট হবে

### 🖍️ কালার এবং থিম
- **Bracket Colorization**: nested structure সহজে বুঝা যাবে
- **Custom Cursor, Highlight & Terminal Colors**: সুন্দর ও আলাদা কালার
- **Dark Theme**: Visual Studio Dark থিম ব্যবহৃত

### 🧪 Code Actions on Save
- **ESLint/TSLint Fixes**
- **Organize Imports**

### 🛠️ Import Management
- **Auto Update Imports**: ফাইল মুভ করলে ইম্পোর্ট অটো আপডেট হবে
- **Relative Import Preference**

### 🧭 Zen Mode Improvements
- অ্যাকটিভিটি বার এবং স্ট্যাটাস বার হাইড হয়ে ফুল ফোকাস মোড

---

## 🧩 প্রয়োজনীয় এক্সটেনশনসমূহ (Extensions Required)

আপনার VS Code-এ নিচের এক্সটেনশনগুলো ইনস্টল করা থাকলে এই সেটিংসগুলো সঠিকভাবে কাজ করবে:

| Extension Name        | ID / Marketplace Name                  |
|-----------------------|----------------------------------------|
| Prettier Formatter     | `esbenp.prettier-vscode`              |
| ESLint                 | `dbaeumer.vscode-eslint`              |
| Error Lens             | `usernamehw.errorlens`                |
| VSCode Icons           | `vscode-icons-team.vscode-icons`      |
| Highlight Matching Tag | `vincaslt.highlight-matching-tag`     |
| GitLens                | `eamodio.gitlens`                     |
| Inline Chat/Cody AI    | `sourcegraph.cody-ai` *(optional)*    |

> ✨ আপনি চাইলে Terminal থেকে নিচের কমান্ড দিয়ে একসাথে ইন্সটল করতে পারেন:
```sh
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension usernamehw.errorlens
code --install-extension vscode-icons-team.vscode-icons
code --install-extension vincaslt.highlight-matching-tag
code --install-extension eamodio.gitlens
code --install-extension sourcegraph.cody-ai
```

---

## 📝 কিভাবে ব্যবহার করবেন?

1. VS Code খুলুন
2. `Ctrl + Shift + P` চাপুন > `Preferences: Open Settings (JSON)` লিখুন
3. তৈরি করা `settings.json` ফাইল কনটেন্ট এখানে পেস্ট করুন
4. প্রয়োজনীয় এক্সটেনশনগুলো ইনস্টল করুন
5. আপনার প্রজেক্টে কাজ শুরু করুন 🚀

---

