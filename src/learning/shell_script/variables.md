# 变量

## 定义变量

基本变量

```sh
PRICE_PER_APPLE=5
MyFirstLetters=ABC
```

当变量之间包含空格时，可以使用引号封装：

::: warning
在编写 Shell 脚本时，通常推荐使用单引号 `''` 来定义字符串常量，以防止不必要的变量扩展。

只有在字符串中需要使用变量或命令时，才使用双引号 `""`。
:::

```sh
greeting='Hello        world!'
```

将命令作为一个变量，可以通过用反引号 \`\` 或 `$()` 封装命令来完成替换：

```sh
FILELIST=`ls`
FileWithTimeStamp=/tmp/my-dir/file_$(/bin/date +%Y-%m-%d).txt
```

数组可以在一个名称下保存多个值。

数组的值通过括号 `()` 括起来，各个值通过空格来分隔：

```sh
my_array=(apple banana "Fruit Basket" orange)
```

## 读取变量

反斜杠 `\` 用于转义特殊字符的含义：

```sh
PRICE_PER_APPLE=5
echo "The price of an Apple today is: \$HK $PRICE_PER_APPLE"
```

使用 `${}` 封装变量名称以避免歧义：

```sh
MyFirstLetters=ABC
echo "The first 10 letters in the alphabet are: ${MyFirstLetters}DEFGHIJ"
```

使用引号 `""` 封装变量名称将保留任何空格值：

```sh
greeting='Hello        world!'
echo $greeting" now with spaces: $greeting"

# => Hello world! now with spaces: Hello        world!
```

- 使用 `${array[index]}` 读取数组元素，例如：`${my_array[0]}`。
- 使用 `${#array[index]}` 读取数组元素的字符串长度，例如：`${#my_array[0]}`。
- 使用 `${#array[@]}` 获取数组的长度。

```sh
my_array=(apple banana "Fruit Basket" orange)
echo  ${my_array[0]}                   # apple
echo  ${#my_array[0]}                  # 5
echo  ${my_array[@]}                   # 4
```

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
