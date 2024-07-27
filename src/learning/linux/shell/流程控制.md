# 流程控制

## 条件语句（if-then-else）

```sh
if [ 条件 ]; then
  # 条件成立时执行的代码块
elif [ 其他条件 ]; then
  # 其他条件成立时执行的代码块
else
  # 条件都不成立时执行的代码块
fi
```

示例：

```sh
var=10

if [ "$var" -lt 10 ]; then
    echo "Variable var is equal to 10."
else
    echo "Variable var is not equal to 10."
fi
```

## for 循环

```sh
for item in 列表; do
  # 循环体，可以使用$item引用当前元素
done
```

示例：

```sh
fruits=("apple" "banana" "cherry")

for fruit in "${fruits[@]}"; do
  echo "I like $fruit."
done
```

## while 循环

```sh
while [ 条件 ]; do
  # 循环体，条件成立时执行
done
```

示例：

```sh
count=1

while [ $count -le 5 ]; do
  echo "Count: $count"
  count=$((count+1))
done
```

## until 循环

```sh
until [ 条件 ]; do
  # 循环体，条件不成立时执行
done
```

示例：

```sh
count=1

until [ $count -gt 5 ]; do
  echo "Count: $count"
  count=$((count+1))
done
```

## 选择语句（case）

```sh
case 变量 in
  模式1)
    # 模式1匹配时执行的代码块
    ;;
  模式2)
    # 模式2匹配时执行的代码块
    ;;
  *)
    # 所有模式都不匹配时执行的代码块
    ;;
esac
```

示例：

```sh
fruit="apple"

case $fruit in
  "apple")
    echo "It's an apple."
    ;;
  "banana")
    echo "It's a banana."
    ;;
  *)
    echo "It's something else."
    ;;
esac
```
