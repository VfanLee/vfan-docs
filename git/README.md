# git

## 更改主分支名称后本地项目重命名

```bash
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```
