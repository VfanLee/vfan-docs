# stash

`git stash` 是一个很有用的 Git 命令，可以在你不想提交当前工作区的更改时，临时保存这些更改，以便于切换分支或做其他操作。以下是 `git stash` 的基本使用方法：

## `git stash` 保存当前更改

将当前的未提交更改保存到一个“栈”中，可以随时恢复。

```bash
git stash
```

这样，你的工作区会恢复到上次提交的状态，改动被暂时存储起来。

## `git stash list` 查看保存的更改

查看所有存储的更改记录。

```bash
git stash list
```

输出示例：

```
stash@{0}: WIP on main: some message
stash@{1}: WIP on main: another message
```

这里 `stash@{0}` 是最近一次的 `stash`，可以通过这个编号来恢复某次保存的更改。

## `git stash apply` 恢复保存的更改

恢复最近一次 `stash` 的更改：

```bash
git stash apply
```

也可以指定恢复特定的 `stash`，比如：

```bash
git stash apply stash@{1}
```

## `git stash pop` 恢复并删除保存的更改

`git stash pop` 会恢复最近的 `stash`，并将其从 `stash` 列表中删除。

```bash
git stash pop
```

## `git stash drop` 删除指定的 `stash`

如果你不再需要某次 `stash` 记录，可以删除它：

```bash
git stash drop stash@{0}
```

## `git stash clear` 清空所有 `stash`

删除所有的 `stash` 记录：

```bash
git stash clear
```

## 给 `stash` 添加描述

在 `stash` 时可以加一个描述信息，方便后续识别：

```bash
git stash save "描述信息"
```

`git stash` 是很实用的工具，可以帮助你管理未完成的更改，避免意外丢失，同时方便地进行分支切换或其他任务。
