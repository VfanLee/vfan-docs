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
