# Git 命令

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

## 提交代码

git 提交代码分 3 步：

1. 同步（fetch、pull）远程仓库的最新代码。
2. 将本地暂存区中的文件提交（commit）到本地仓库。
3. 再将本地仓库的代码推送（push）到远程仓库。

### git fetch

`git fetch` 命令用于从远程仓库 **获取** 最新的提交，但不会自动合并到本地分支中，而是将这些提交保存到本地仓库中。

```sh
 # 获取默认远程仓库的所有分支数据
git fetch

# 获取指定远程仓库的所有分支数据
git fetch <remote-name>

# 获取指定远程仓库的指定分支数据
git fetch <remote-name> <branch-name>
```

### git pull

`git pull` 命令用于从远程仓库 **获取** 最新的提交并 **自动合并（merge）** 到本地分支中。

```sh
 # 获取并合并默认远程仓库的所有分支数据
git pull

# 获取并合并指定远程仓库的所有分支数据
git pull <remote-name>

# 获取并合并指定远程仓库的指定分支数据
git pull <remote-name> <branch-name>
```

### git add

`git add` 命令只会将文件提交到 **暂存区**。

```sh
# 提交一个文件
git add <file-path>

# 提交一个文件夹及其内容
git add <directory-path>

# 当前目录及其所有子目录中的更改添加到暂存区，但不包括删除的文件。
git add .

# 将当前目录及其所有子目录中的所有更改（包括新创建、已修改和已删除的文件）都添加到暂存区。
git add -A
git add --all
```

### git commit

`git add` 命令会将 **暂存区** 的文件提交到 **本地仓库**。

```sh
# 提交暂存区中的所有文件并添加提交信息。
git commit -m "<commit message>"

# 提交暂存区中指定的文件并添加提交信息。
# 其中，<file1>、<file2> 等是需要提交的文件名。
git commit -m "<commit message>" <file1> <file2> ...
```

### git push

`git push` 命令会将 **本地仓库** 的 **提交（commit）** 文件提交到 **远程仓库**。

```sh
# 推送当前分支的提交到默认远程仓库中的同名分支
git push

# 推送当前分支的提交到指定远程仓库中同名分支
git push <remote-name>

# 推送当前分支的提交到指定远程仓库的指定分支
git push <remote-name> <branch-name>
```

## 分支操作

同理，git 分支分为 “本地分支” 和 “远程分支” 两种。

### 查看分支

```sh
# 查看本地分支
git branch
git branch -v

# 查看远程分支
git branch -r

# 查看所有分支
git branch -a
```

### 创建新分支

```sh
# 创建新分支
git branch <new-branch-name>

# 创建新分支（基于特定版本）
git branch <new-branch-name> 2b504bee
```

### 切换分支

```sh
# 切换分支【old 已过时】
git checkout <other-branch>

# 切换分支【new git 2.23+】
git switch <other-branch>
```

### 重命名分支

```sh
# 重命名当前 HEAD 分支名
git branch -m <new-name>

# 重命名任何本地分支名
git branch -m <old-name> <new-name>

# “重命名”远程分支名
# 注意：本地无法给远程分支进行重命名，不过，我们可以先删除掉远程分支，再将本地分支推送到远程仓库，以达到“重命名”的效果。
git push origin --delete <old-name>
git push origin <new-name>
```

### 发布分支

注意：本地无法直接给远程仓库创建分支，不过，我们可以将本地的分支上传至远程仓库。

```sh
# “上传”本地分支
git push origin <local-branch>
```

### 删除分支

```sh
# 删除本地分支
git branch -d <branch-name>

# 删除远程分支
git push origin --delete <branch-name>

# 删除远程仓库中已删除的分支
git fetch -p
```

### 合并分支

> 备注：还有一种合并分支的方式是 rebase “变基”，会改变提交历史，以此来保持线性历史，个人不习惯，因此不记录。

```sh
# 1. 切换到你需要更改的分支上，比如切换到 main 分支上
git switch main
# 2. 再来合并你的分支
git merge <your-branch>
```

解决冲突

```sh
# 1. 解决冲突代码
# 2. 使用 "git add <file>..." 来更新文件状态，以此来标记冲突已解决
git add xxx
```

压缩提交记录

`--squash` 选项会将源分支上的所有提交“压缩”成一个单独的合并提交。这意味着你不会在目标分支上看到源分支的所有独立提交记录，只会看到一个包含所有更改的提交。使用 `--squash` 后，你需要手动提交这些更改。

```sh
git switch main
git merge --squash feature-branch
git commit -m "合并 feature-branch 到 main"
```

默认的 `merge`（或 `merge --no-squash`） 行为会保留源分支上的所有提交历史。这意味着合并后的目标分支会包含源分支上所有独立的提交记录。

```sh
git switch main
git merge feature-branch
```

## 回滚到某次提交

### `git reset`

如果你希望完全撤回这些提交，并删除它们的所有记录，你可以使用 `git reset`。

有两种常见方式：`--hard` 和 `--soft`。

#### 使用 `git reset --hard`

这种方法将分支重置到合并之前的状态，删除所有提交和工作目录中的更改。

```sh
# 1. 查看提交历史，找到合并之前的提交哈希值（`commit_hash`）
git log

# 2. 重置到合并之前的提交
git reset --hard commit_hash
```

::: danger 谨慎使用
这种方法会丢失所有在合并过程中所做的更改！
:::

#### 使用 `git reset --soft`

这种方法将分支重置到合并之前的状态，但保留工作目录中的更改。

```sh
# 1. 查看提交历史，找到合并之前的提交哈希值（`commit_hash`）。
git log

# 2. 重置到合并之前的提交。
git reset --soft commit_hash

# 3. 你可以根据需要进行重新提交或其他操作。
# ...
```

::: tip

若提示

```
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

可通过 `git push -f` 强制提交。

:::

### `git revert`

`git revert` 是一种更安全的方法，它通过创建一个新的提交来撤销之前的提交。这样不会删除任何历史记录，并且所有的更改都可以被追踪。

#### 使用 `git revert`

这种方法会创建一个新的提交来撤销之前的提交，而不会删除提交历史。

```sh
# 1. 查看提交历史，找到需要撤销的提交哈希值（`commit_hash`）。
git log

# 2. 撤销指定的提交。
git revert commit_hash

# 3. 处理冲突（如果有）。
# 如果在撤销过程中产生冲突，解决冲突后执行以下命令继续：
git revert --continue

# 4. 提交完成后，提交历史中会增加一个新的提交，表示撤销操作。
```

### `git reset` vs `git revert`

- `git reset` 会修改提交历史，因此在协作环境中使用需要谨慎。
- `git revert` 不会修改提交历史，而是通过创建新提交的方式撤销更改，适合在协作环境中使用。

## 总结

```
git remote update：更新所有远程仓库的引用信息，不会修改本地分支内容。
git fetch：从指定的远程仓库获取更新的引用信息，不会修改本地分支内容。
git pull：从指定的远程仓库获取更新并合并到当前分支，直接影响本地分支内容。
```
