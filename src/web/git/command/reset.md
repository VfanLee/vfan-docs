# “后悔药”

## `git reset`

如果你希望完全撤回这些提交，并删除它们的所有记录，你可以使用 `git reset`。

有两种常见方式：`--hard` 和 `--soft`。

### 使用 `git reset --hard`

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

### 使用 `git reset --soft`

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

### 撤销提交

| 操作                         | 命令                                     |
|------------------------------|------------------------------------------|
| 撤销 commit，保留修改到暂存区 | `git reset --soft HEAD~1`               |
| 撤销 commit，保留修改到工作区 | `git reset --mixed HEAD~1`              |
| 撤销 commit，丢弃所有修改     | `git reset --hard HEAD~1`               |
| 生成新的撤销 commit           | `git revert <commit-hash>`              |
| 强制撤销远程提交              | `git reset --hard HEAD~1 && git push -f`|

### 撤销最近一次 commit，但保留修改的文件

如果你想撤销最近的 commit，同时保留已修改的文件和暂存状态：

```bash
git reset --soft HEAD~1
```

#### 说明

- `HEAD~1` 表示上一个 commit。
- `--soft` 会将 commit 的修改放回暂存区（staged）。

### 撤销最近一次 commit，并将修改放回工作区

如果你想撤销 commit，同时将修改的文件放回未暂存状态（working directory）：

```bash
git reset --mixed HEAD~1
```

#### 说明

- `--mixed` 是默认选项，它会保留工作区中的修改，但清空暂存区。

### 撤销最近一次 commit，并丢弃修改

如果你想撤销 commit 并且丢弃修改的文件（无法恢复）：

```bash
git reset --hard HEAD~1
```

#### 注意

- 这种操作会丢失修改，需谨慎使用。

### **撤销已推送的 commit**

如果 commit 已推送到远程仓库，可以使用以下步骤：

#### 方法 1：使用 `git revert`

`git revert` 会生成一个新的 commit，用于撤销指定的 commit。

```bash
git revert <commit-hash>
```

#### 方法 2：使用 `git reset`

如果你需要强制撤销远程仓库的提交：

```bash
git reset --hard HEAD~1
git push origin <branch-name> --force
```

**注意**:  
- 强制推送可能会影响其他协作成员，需谨慎操作。

### **撤销多次 commit**

如果需要撤销多个 commit，比如最近的三次 commit，可以调整 `HEAD~<n>` 的值：

```bash
git reset --soft HEAD~3  # 撤销最近 3 次 commit，保留修改到暂存区
git reset --mixed HEAD~3 # 撤销最近 3 次 commit，修改回到工作区
git reset --hard HEAD~3  # 撤销最近 3 次 commit，丢弃所有修改
```

### **查看 commit 历史以选择需要撤销的 commit**

在撤销之前，可以通过以下命令查看 commit 历史：

```bash
git log --oneline
```

选择需要撤销的 commit，使用对应的 hash 值进行操作。

## `git revert`

`git revert` 是一种更安全的方法，它通过创建一个新的提交来撤销之前的提交。这样不会删除任何历史记录，并且所有的更改都可以被追踪。

### 使用 `git revert`

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

## `git reset` vs `git revert`

- `git reset` 会修改提交历史，因此在协作环境中使用需要谨慎。
- `git revert` 不会修改提交历史，而是通过创建新提交的方式撤销更改，适合在协作环境中使用。
