# 将参数传递给脚本

## 基本示例

`my_shopping.sh` 文件包含以下代码：

```sh
#!/bin/bash
echo "File name is "$0
echo $3
Data=$5
echo "A $Data costs just $6."
echo $#
echo $@
```

在终端中执行：

```sh
bash my_shopping.sh apple 5 banana 8 "Fruit Basket" 15
```

输出：

```sh
File name is my_shopping.sh
banana
A Fruit Basket costs just 15.
6
apple 5 banana 8 Fruit Basket 15
```

## 特殊变量

- `$0`：脚本名称。
- `$1`, `$2`, `$n`：第 1, 2, n 个参数。
- `$#`：保存传递给脚本的参数数量。
- `$@`：保存传递给脚本的所有参数字符串，以空格分隔。
- `$?`：表示上一个命令的退出状态。通常，如果命令成功执行，`$?` 的值将为 0，否则它将为非零。
- `$$`：表示当前进程的PID（进程标识符）。
