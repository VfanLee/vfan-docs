# GitHub

## GitHub Actions

1. GitHub 进入 Account Settings；
2. 找到 Developer settings，生成一个 token，并赋予 repo、workflow 的权限；
3. 进入项目仓库（Vue 为例）的 Settings 中；
4. 找到 Security/Secrets and variables/Actions，新建一个仓库密钥（token 值）。
5. 编写自动化脚本，如下：

```yml
name: deploy

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
          token: ${{ secrets.CICD }}
```
