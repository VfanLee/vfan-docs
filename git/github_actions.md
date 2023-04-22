# github actions

```yaml
name: github pages

on:
  push:
    branches: ['main']
  pull_request:
    branches: ['main']

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Configure Node.js ⚙️
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install and Build 🔧
        run: |
          npm ci
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
```
