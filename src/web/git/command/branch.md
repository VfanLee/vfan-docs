# 分支操作

同理，git 分支分为 “本地分支” 和 “远程分支” 两种。

```
git remote update：更新所有远程仓库的引用信息，不会修改本地分支内容。
git fetch：从指定的远程仓库获取更新的引用信息，不会修改本地分支内容。
git pull：从指定的远程仓库获取更新并合并到当前分支，直接影响本地分支内容。
```

## 查看分支

```sh
# 查看本地分支
git branch
git branch -v

# 查看远程分支
git branch -r

# 查看所有分支
git branch -a
```

## 创建新分支

```sh
# 创建新分支
git branch <new-branch-name>

# 创建新分支（基于特定版本）
git branch <new-branch-name> 2b504bee
```

## 切换分支

```sh
# 切换分支【old 已过时】
git checkout <other-branch>

# 切换分支【new git 2.23+】
git switch <other-branch>
```

## 重命名分支

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

## 发布分支

注意：本地无法直接给远程仓库创建分支，不过，我们可以将本地的分支上传至远程仓库。

```sh
# “上传”本地分支
git push origin <local-branch>
```

## 删除分支

```sh
# 删除本地分支
git branch -d <branch-name>

# 删除远程分支
git push origin --delete <branch-name>

# 删除远程仓库中已删除的分支
git fetch -p
```

## 合并分支

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

还有一种合并分支的方式是 rebase “变基”，会改变提交历史，以此来保持线性历史。

例如：在 PR 时，为了保持与上游相同的提交记录，rebase 显的尤为好用：

```sh
git remote add upstream <origin_url> # 如果已经添加了，就不需要再次添加了

git fetch upstream
git switch main # 如果已经处于 main 分支，可忽略
git rebase upstream/main
git push origin main --force  # 更新 GitHub 仓库上的 main 分支
```

通过 rebase，提交历史会呈现线性的结构，因为它相当于在最新的源仓库基础上“重新排列”你的提交，而不是将两条提交历史合并（更干净）。这可以避免在 PR 中出现额外的合并提交记录，使提交历史更简洁，方便代码审查和维护。
