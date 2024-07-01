# 变量

## 本地变量

- **定义本地变量**：使用等号将值分配给变量，例如：`MY_VARIABLE="Hello, World!"`。
- **读取本地变量**：使用 `$` 符号后跟变量名，例如：`echo $MY_VARIABLE`。
- **删除本地变量**：使用 `unset` 命令，例如：`unset MY_VARIABLE`。

## 环境变量

- **定义环境变量**：使用 `export` 命令将变量设置为环境变量，例如：`export MY_ENV_VARIABLE="This is an environment variable"`。
- **读取环境变量**：与本地变量相同，使用 `$` 符号，例如：`echo $HOME`。
- **删除本地变量**：与本地变量相同，使用 `unset` 命令，例如：`unset HOME`。
- **全局范围**：环境变量在整个shell会话中都可用，包括子进程。

### 命令行设置临时代理

```sh
export http_proxy="http://your-proxy-server:port"
export https_proxy="http://your-proxy-server:port"
export ftp_proxy="http://your-proxy-server:port"
export no_proxy="localhost,127.0.0.1,localaddress,.localdomain.com"

unset http_proxy
unset https_proxy
unset ftp_proxy
unset no_proxy
```

## 数组变量

- **定义数组**：使用括号和空格来定义数组，例如：`my_array=("apple" "banana" "cherry")`。
- **读取数组元素**：使用 `${array[index]}` 表示法来读取数组元素，例如：`${my_array[0]}`。
- **数组长度**：使用 `${#array[@]}` 获取数组的长度。

## 用户输入

读取用户输入：使用 `read` 命令从用户输入中读取值，例如：`read USERNAME`。

## 特殊变量

在脚本内部，您可以使用 `$0` 获取脚本名称，使用 `$1`、`$2`、`$3` 获取相应的参数值。

- `$?`：表示上一个命令的退出状态。通常，如果命令成功执行，`$?` 的值将为 0，否则它将为非零。
- `$$`：表示当前进程的PID（进程标识符）。

示例：您可以使用 `$?` 来检查上一个命令是否成功执行，例如：

```sh
ls non_existent_directory
if [ $? -eq 0 ]; then
    echo "Command succeeded"
else
    echo "Command failed"
fi
```

在这个示例中，如果 `ls` 命令成功执行（即目录存在），则 `$?` 的值为 0，否则它将是非零值。

另外，`$$` 可以用于创建临时文件名或其他需要唯一标识符的任务，以避免命名冲突。
