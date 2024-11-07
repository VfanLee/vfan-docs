# 代码提交

git 提交代码分 3 步：

1. 同步（fetch、pull）远程仓库的最新代码。
2. 将本地暂存区中的文件提交（commit）到本地仓库。
3. 再将本地仓库的代码推送（push）到远程仓库。

## git fetch

`git fetch` 命令用于从远程仓库 **获取** 最新的提交，但不会自动合并到本地分支中，而是将这些提交保存到本地仓库中。

```sh
 # 获取默认远程仓库的所有分支数据
git fetch

# 获取指定远程仓库的所有分支数据
git fetch <remote-name>

# 获取指定远程仓库的指定分支数据
git fetch <remote-name> <branch-name>
```

git fetch --all

- 作用：从所有已添加的远程仓库获取所有分支的更新。
- 使用场景：当你有多个远程仓库（例如 origin 和 upstream）时，--all 可以让你从所有远程仓库中一次性拉取更新。

git fetch -p / git fetch --prune

- 作用：清理本地引用中已被远程删除的分支。
- 使用场景：当远程仓库中删除了一些分支，而你在本地 git branch -a 还可以看到这些分支的缓存信息时，使用 -p 可以清除这些无效的远程分支引用。

## git pull

`git pull` 命令用于从远程仓库 **获取** 最新的提交并 **自动合并（merge）** 到本地分支中。

```sh
 # 获取并合并默认远程仓库的所有分支数据
git pull

# 获取并合并指定远程仓库的所有分支数据
git pull <remote-name>

# 获取并合并指定远程仓库的指定分支数据
git pull <remote-name> <branch-name>
```

## git add

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

## git commit

`git add` 命令会将 **暂存区** 的文件提交到 **本地仓库**。

```sh
# 提交暂存区中的所有文件并添加提交信息。
git commit -m "<commit message>"

# 提交暂存区中指定的文件并添加提交信息。
# 其中，<file1>、<file2> 等是需要提交的文件名。
git commit -m "<commit message>" <file1> <file2> ...
```

## git push

`git push` 命令会将 **本地仓库** 的 **提交（commit）** 文件提交到 **远程仓库**。

```sh
# 推送当前分支的提交到默认远程仓库中的同名分支
git push

# 推送当前分支的提交到指定远程仓库中同名分支
git push <remote-name>

# 推送当前分支的提交到指定远程仓库的指定分支
git push <remote-name> <branch-name>
```
