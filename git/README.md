# git

## 1. Git 全局配置

Tips:

1. 安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。 这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改。
2. 所有的全局配置在 `~/.gitconfig` 中都可查看。

```sh
git config --global user.name "VfanLee"                   # 用户名【必须】
git config --global user.email "fanfanfafafa@gmail.com"   # 邮箱【必须】
git config --global https.proxy https://127.0.0.1:7890    # 设置 https 代理
git config --global --unset https.proxy                   # 取消代理
```

### 1.1. 设置 SSH 免密登录

1. 生成 SSH 密钥

    ```sh
    ssh-keygen -t rsa -C GITHUB_KEY  # 紧接之后三次回车即可
    ```

    成功执行后，会生成 `~/.ssh` 文件夹，包含公钥 `id_rsa.pub`、私钥 `id_rsa` 等文件。

    ```txt
    ├── id_rsa # 私钥
    └── id_rsa.pub # 公钥
    ```

2. 将公钥添加至 GitHub/GitLab 中。

## 2. 常用命令

```sh
# start a working area
git clone     # Clone a repository into a new directory
git init      # Create an empty Git repository or reinitialize an existing one

# work on the current change
git add       # Add file contents to the index

# examine the history and state
git status    # Show the working tree status
git log       # Show commit logs

# grow, mark and tweak your common history
git commit    # Record changes to the repository
git branch    # List, create, or delete branches
git merge     # Join two or more development histories together
git remote    # Manage set of tracked repositories

# collaborate
git fetch     # Download objects and refs from another repository
git pull      # Fetch from and integrate with another repository or a local branch
git push      # Update remote refs along with associated objects
```

### 2.1. git commit

`git commit` 命令用于将暂存区中的文件提交到本地仓库。

```sh
# 提交暂存区中的所有文件并添加提交信息。
# 其中，<commit message> 是提交信息，用于描述本次提交的内容。
git commit -m "<commit message>"

# 提交暂存区中指定的文件并添加提交信息。
# 其中，<file1>、<file2> 等是需要提交的文件名。
git commit -m "<commit message>" <file1> <file2> ...

# 提交暂存区和工作区中所有文件并添加提交信息
git commit -am "<commit message>"
```

### 2.2. git branch

`git branch` 是 Git 的一个命令，它用于列出、创建、删除或重命名分支。

```sh
# 查看分支
git branch      # 列出本地分支
git branch -r   # 列出远程分支
git branch -a   # 列出所有分支

# 创建分支
git branch <branch-name>

# 切换分支
git checkout <branch-name>

# 创建并切换到新分支
git checkout -b <branch-name>

# 删除分支
git branch -d <branch-name>

# 重命名分支
git branch -m <old-branch-name> <new-branch-name>
```

### 2.3. git merge

`git merge` 命令用于将两个或多个分支的修改合并到一个分支中。

```sh
# 将另一个分支合并到当前分支
git merge <branch-name>
```

### 2.4. git remote

`git remote` 命令用于管理远程仓库。

```sh
# 查看当前项目所关联的远程仓库
git remote -v

# 添加远程仓库。
# 其中，<remote-name> 是你给远程仓库起的名字，一般是 origin，<remote-url> 是远程仓库的 URL。
git remote add <remote-name> <remote-url>

# 删除远程仓库
git remote rm <remote-name>

# 修改远程仓库的 URL
git remote set-url <remote-name> <new-remote-url>

# 查看远程仓库的详细信息
git remote show <remote-name>

# 重命名远程仓库
git remote rename <old-name> <new-name>
```

### 2.5. git fetch

`git fetch` 命令用于从远程仓库获取最新的提交，但不会自动合并到本地分支中，而是将这些提交保存到本地仓库中。

```sh
# 获取远程仓库的最新提交。
# 其中，<remote-name> 是远程仓库的名字，一般是 origin。
git fetch <remote-name>

# 获取远程仓库的最新提交并保存到本地分支中。
# 其中，<remote-name> 是远程仓库的名字，<branch-name> 是远程分支的名字，<local-branch-name> 是本地分支的名字。
git fetch <remote-name> <branch-name>:<local-branch-name>

# 获取远程仓库的所有分支的最新提交。
git fetch --all
```

当执行 git fetch 命令时，Git 会从远程仓库中获取最新的提交，并将这些提交保存到本地仓库的远程跟踪分支中。这样，在执行 git merge 或 git pull 命令时，Git 就可以使用本地仓库中保存的最新提交，而不需要从远程仓库重新获取。

### 2.6. git pull

`git pull` 命令用于从远程仓库获取最新的提交并合并到本地分支中。

```sh
# 从远程仓库的默认分支获取最新的提交并合并到当前分支中。
git pull

# 从远程仓库的指定分支获取最新的提交并合并到当前分支中。
# 其中，<remote-name> 是远程仓库的名字，一般是 origin，<branch-name> 是远程分支的名字。
git pull <remote-name> <branch-name>

# 获取最新的提交并重新合并到当前分支中。
git pull --rebase
```

当执行 `git pull` 命令时，Git 会自动执行 `git fetch` 命令获取最新的提交，然后将这些提交合并到当前分支中。如果需要进行代码冲突解决等操作，可以在执行 `git pull` 命令之前先执行 `git fetch` 命令，手动获取最新的提交。

### 2.7. git push

`git push` 命令用于将本地的代码变更推送到远程仓库。

```sh
# 将本地代码推送到远程仓库的同名分支
git push

# 将本地代码推送到远程仓库的不同分支
git push <remote-name> <local-branch-name>:<remote-branch-name>

# 将本地代码推送到远程仓库并创建新的分支
# 如果远程仓库中不存在名为 <remote-branch-name> 的分支，那么这个命令会创建一个新的分支并将本地分支推送到远程仓库。
git push <remote-name> <local-branch-name>:<remote-branch-name>
```

## 3. 实际场景

### 3.1. 创建一个新的库

```sh
echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/VfanLee/test.git
git push -u origin main
```

### 3.2. 导入现有库

```sh
git remote add origin https://github.com/VfanLee/test.git
git branch -M main
git push -u origin main
```

### 3.3. 更改主分支名称后本地项目重命名

```sh
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```
