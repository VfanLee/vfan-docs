# 仓库管理

## 新建仓库

### 初始化本地仓库

```sh
git init
```

### 克隆远程仓库

```sh
git clone <repo-url>
```

## 管理远程仓库

### 查看远程仓库

```sh
# 查看当前项目所关联的远程仓库
git remote
git remote -v

# 查看远程仓库的详细信息
git remote show <remote-name>
```

### 添加远程仓库

```sh
# <remote-name> 是你给远程仓库起的名字，一般是 origin
# <remote-url> 是远程仓库的 URL。
git remote add <remote-name> <remote-url>
```

### 重命名远程仓库

```sh
git remote rename <old-name> <new-name>
```

### 修改远程仓库的 URL

```sh
git remote set-url <remote-name> <new-remote-url>
```

### 删除远程仓库

```sh
git remote rm <remote-name>
```

### prune

git remote prune 用于删除远程仓库中已经被删除的分支的本地引用。它有助于保持本地存储库的整洁。

```sh
# 在清理之前，可以使用 --dry-run 选项查看哪些分支将被删除
git remote prune origin --dry-run

# 一旦确认可以安全删除这些分支，执行以下命令进行清理
git remote prune origin
```

### update

git remote update 用于更新所有远程仓库的引用，包括获取所有分支和标签的最新状态。它实际上是对所有远程仓库执行 git fetch 操作。

```sh
# 更新所有远程仓库
git remote update

# 更新指定的远程仓库
git remote update origin
```

git remote update -p 相当于 git remote update + git remote prune origin
