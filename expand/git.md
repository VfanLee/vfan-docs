# Git

git 操作分为 “本地” 和 “远程” 两种。

## 1. 基本配置

```sh
git config --global --list                                # 查看所有全局配置
```

设置 git 提交信息。

```sh
git config --global user.name "VfanLee"                   # 用户名【必须】
git config --global user.email "fanfanfafafa@gmail.com"   # 邮箱【必须】
```

git 设置代理。

```sh
git config --global http.proxy http://127.0.0.1:7890     # 设置 http 代理
git config --global https.proxy https://127.0.0.1:7890   # 设置 https 代理
git config --global --unset http.proxy                   # 取消 http 代理
git config --global --unset https.proxy                  # 取消 https 代理
```

## 2. SSH 登录

1. 生成 SSH 密钥

    ```sh
    ssh-keygen -t rsa -C GITHUB_KEY  # 紧接之后三次回车即可
    ```

    成功执行后，会生成 `~/.ssh` 文件夹，包含公钥 `id_rsa.pub`、私钥 `id_rsa` 等文件。

    ```txt
    ├── id_rsa     # 私钥
    └── id_rsa.pub # 公钥
    ```

2. 将公钥添加至 gitHub/gitLab 中。

## 3. 新建仓库

### 3.1. 初始化本地仓库

```sh
git init
```

### 3.2. 克隆远程仓库

```sh
git clone <repo-url>
```

## 4. 管理远程仓库

### 4.1. 查看远程仓库

```sh
# 查看当前项目所关联的远程仓库
git remote
git remote -v

# 查看远程仓库的详细信息
git remote show <remote-name>
```

### 4.2. 添加远程仓库

```sh
# <remote-name> 是你给远程仓库起的名字，一般是 origin
# <remote-url> 是远程仓库的 URL。
git remote add <remote-name> <remote-url>
```

### 4.3. 重命名远程仓库

```sh
git remote rename <old-name> <new-name>
```

### 4.4. 修改远程仓库的 URL

```sh
git remote set-url <remote-name> <new-remote-url>
```

### 4.5. 删除远程仓库

```sh
git remote rm <remote-name>
```

## 5. 提交代码

git 提交代码分 3 步：

1. 同步（fetch、pull）远程仓库的最新代码。
2. 将本地暂存区中的文件提交（commit）到本地仓库。
3. 再将本地仓库的代码推送（push）到远程仓库。

### 5.1. git fetch

`git fetch` 命令用于从远程仓库 **获取** 最新的提交，但不会自动合并到本地分支中，而是将这些提交保存到本地仓库中。

```sh
 # 获取默认远程仓库的所有分支数据
git fetch

# 获取指定远程仓库的所有分支数据
git fetch <remote-name>

# 获取指定远程仓库的指定分支数据
git fetch <remote-name> <branch-name>
```

### 5.2. git pull

`git pull` 命令用于从远程仓库 **获取** 最新的提交并 **自动合并（merge）** 到本地分支中。

```sh
 # 获取并合并默认远程仓库的所有分支数据
git pull

# 获取并合并指定远程仓库的所有分支数据
git pull <remote-name>

# 获取并合并指定远程仓库的指定分支数据
git pull <remote-name> <branch-name>
```

### 5.3. git add

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

### 5.4. git commit

`git add` 命令会将 **暂存区** 的文件提交到 **本地仓库**。

```sh
# 提交暂存区中的所有文件并添加提交信息。
git commit -m "<commit message>"

# 提交暂存区中指定的文件并添加提交信息。
# 其中，<file1>、<file2> 等是需要提交的文件名。
git commit -m "<commit message>" <file1> <file2> ...
```

### 5.5. git push

`git push` 命令会将 **本地仓库** 的 **提交（commit）** 文件提交到 **远程仓库**。

```sh
# 推送当前分支的提交到默认远程仓库中的同名分支
git push

# 推送当前分支的提交到指定远程仓库中同名分支
git push <remote-name>

# 推送当前分支的提交到指定远程仓库的指定分支
git push <remote-name> <branch-name>
```

## 6. 分支操作

同理，git 分支分为 “本地分支” 和 “远程分支” 两种。

### 6.1. 查看分支

```sh
# 查看本地分支
git branch
git branch -v

# 查看远程分支
git branch -r

# 查看所有分支
git branch -a
```

### 6.2. 创建新分支

```sh
# 创建新分支
git branch <new-branch-name>

# 创建新分支（基于特定版本）
git branch <new-branch-name> 2b504bee
```

### 6.3. 切换分支

```sh
# 切换分支【old 已过时】
git checkout <other-branch>

# 切换分支【new git 2.23+】
git switch <other-branch>
```

### 6.4. 重命名分支

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

### 6.5. 发布分支

注意：本地无法直接给远程仓库创建分支，不过，我们可以将本地的分支上传至远程仓库。

```sh
# “上传”本地分支
git push origin <local-branch>
```

### 6.6. 删除分支

```sh
# 删除本地分支
git branch -d <branch-name>

# 删除远程分支
git push origin --delete <branch-name>
```

### 6.7. 合并分支

> 备注：还有一种合并分支的方式是 rebase “变基”，会改变提交历史，以此来保持线性历史，个人不习惯，因此不记录。

```sh
# 1. 切换到你需要更改的分支上，比如切换到 main 分支上
git switch main
# 2. 再来合并你的分支
git merge <your-branch>
```

如果遇到冲突如何处理？

```sh
# 1. 解决冲突代码
# 2. 使用 "git add <file>..." 来更新文件状态，以此来标记冲突已解决
git add xxx
```

## 难道还有 “后悔药” ？

### 回滚到某次提交

如果您需要回滚到某次提交，可以按照以下步骤操作：

1. **确定回滚目标**：首先，确定您要回滚到的目标提交的哈希值或提交消息。您可以使用 `git log` 命令来查看提交历史并找到目标提交。

2. **创建新分支**：为了安全起见，建议创建一个新的回滚分支，以便在回滚操作期间可以随时切换回原始分支。假设您的主分支是 `main`，目标提交的哈希值是 `<target-commit-hash>`，可以运行以下命令：

   ```sh
   git checkout main  # 切换回主分支
   git checkout -b rollback-branch  # 创建回滚分支
   ```

3. **回滚到目标提交**：使用 `git reset` 命令将分支回滚到目标提交。有两种主要的回滚方式：

   - **软回滚**：保留更改在工作目录中，但将分支指针回滚到目标提交。这允许您检查和重新提交更改。

     ```sh
     git reset --soft <target-commit-hash>
     ```

   - **硬回滚**：将分支指针和工作目录都回滚到目标提交，丢失所有更改。谨慎使用这种方式，因为它会删除工作目录中的未提交更改。

     ```sh
     git reset --hard <target-commit-hash>
     ```

4. **推送回滚分支**：如果回滚后满意，您可以将回滚分支推送到远程仓库，以使线上环境也回滚到目标提交。

   ```sh
   git push origin rollback-branch
   ```

## .gitignore

.gitignore 用于忽略提交的文件。以下是.gitignore文件的一些常见语法规则的总结：

1. 文件匹配：
   - `filename`：忽略特定文件或目录。
   - `*.ext`：使用通配符 `*` 来匹配所有扩展名为 `ext` 的文件。
   - `file*`：匹配以 "file" 开头的文件名。
   - `*file`：匹配以 "file" 结尾的文件名。
   - `file?`：匹配一个字符的文件名，例如 `file1` 或 `fileA`。
   - `/path/to/file`：指定文件的完整路径来忽略特定位置的文件。

2. 目录匹配：
   - `/dirname/`：忽略根目录下的特定目录 `dirname` 及其内容。
   - `dirname/`：忽略所有位置的 `dirname` 目录及其内容。
   - `**/dirname/`：使用 `**` 来匹配任何嵌套位置下的 `dirname` 目录。

3. 注释：
   - 使用 `#` 开头的行表示注释，可以添加注释来解释忽略规则。

4. 取消忽略：
   - 使用前缀 `!` 来取消对特定文件或目录的忽略。例如，`!importantfile.txt` 将不忽略 `importantfile.txt`。

5. 通配符：
   - 支持常见的通配符，如 `*`（匹配零或多个字符）和 `?`（匹配一个字符）。

6. 相对路径：
   - .gitignore 文件中的规则通常是相对于.gitignore文件所在目录的路径。

示例：

```gitignore
# 忽略所有日志文件
*.log

# 忽略build目录及其内容
/build/

# 忽略根目录下的config.ini文件
/config.ini

# 不忽略assets/images目录下的image.jpg
!assets/images/image.jpg
```
