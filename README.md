# Bassam Khamis Mansour

Personal portfolio for a C++ / Qt / QML and Embedded Linux engineer.

Live site (after you push): https://bassamkhamis.github.io

## Files

- `index.html` — page content
- `css/styles.css` — layout and theme
- `js/main.js` — mobile menu and scroll fade-in
- `favicon.svg` — tab icon

Open `index.html` in a browser to preview locally. Fonts need a network connection.

## Publish on GitHub Pages

1. Install [Git for Windows](https://git-scm.com/download/win) if `git` is not already available.
2. On GitHub, signed in as **bassamkhamis**, create a **public** repository named **`bassamkhamis.github.io`**. Leave it empty (no README, .gitignore, or license).
3. In this folder, run:

```bash
git init
git add .
git commit -m "Add dark portfolio site"
git branch -M main
git remote add origin https://github.com/bassamkhamis/bassamkhamis.github.io.git
git push -u origin main
```

4. Open https://bassamkhamis.github.io. For a repo with that name, GitHub Pages serves `main` from the root. If the site 404s, go to **Settings → Pages**, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**.
