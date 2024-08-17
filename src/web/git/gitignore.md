# `.gitignore`

## 说明

`.gitignore` 用于忽略提交的文件。

## 语法规则

以下是 `.gitignore` 文件的一些常见语法规则的总结：

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

## .gitignore 模板集合

<https://github.com/github/gitignore>
