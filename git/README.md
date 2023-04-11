# git

## 创建一个新的库

```bash
echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/VfanLee/test.git
git push -u origin main
```

## 导入现有库

```bash
git remote add origin https://github.com/VfanLee/test.git
git branch -M main
git push -u origin main
```

## 更改主分支名称后本地项目重命名

```bash
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```
