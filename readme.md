# ⚙️ Webpack Template Repository

A minimal and reusable **Webpack boilerplate** for modern front-end development.

---

## 🧱 Folder Structure

```
project/
├── src/
│   ├── index.js
│   ├── style.css
│   └── template.html
├── dist/
├── webpack.dev.cjs
├── webpack.prod.cjs
├── package.json
└── .gitignore
```

---

## ⚙️ Setup Commands

### 1️⃣ Create Folder & Starter Files

```bash
mkdir src && touch src/index.js src/style.css src/template.html
```

---

## 🧩 Install Dependencies

### Core Webpack

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
```

### Plugins & Loaders

```bash
npm install --save-dev html-webpack-plugin style-loader css-loader html-loader clean-webpack-plugin
```

---

## 🗂️ .gitignore

Create a `.gitignore` file:

```
node_modules/
dist/
.DS_Store
```

---

## ⚡ NPM Scripts

Add these scripts to your `package.json`:

```json
"scripts": {
  "start": "webpack serve --config webpack.dev.cjs",
  "build": "webpack --config webpack.prod.cjs",
  "deploy": "git subtree push --prefix dist origin gh-pages"
}
```

**Usage:**

```bash
npm run start   # Start local development server
npm run build   # Create optimized production build
npm run deploy  # Push /dist to GitHub Pages
```

---

## 🚀 Deploy to GitHub Pages

### First-time setup:

```bash
git checkout -b gh-pages
```

### Future deployments:

```bash
npm run deploy
```

---

## 🧰 Notes

- Uses **Webpack 5**
- Uses **CommonJS (`.cjs`)** syntax
