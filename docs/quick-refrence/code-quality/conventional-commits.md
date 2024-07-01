# 约定式提交

提交代码时，采用规范的提交信息格式有助于维护项目的清晰性和可管理性。

常见的规范之一是 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/)，它为提交信息提供了一个结构化的标准。以下是如何使用这个规范来编写提交信息：

## Conventional Commits 格式

提交信息由以下部分组成：

1. **类型**（必需）
2. **范围**（可选）
3. **描述**（必需）
4. **正文**（可选）
5. **页脚**（可选）

格式为：

```
<type>(<scope>): <description>

<body>

<footer>
```

## 类型（type）

类型用于说明提交的类别。常见的类型包括：

- **feat**: 新功能。
- **fix**: 修复 bug。
- **docs**: 仅文档更改。
- **style**: 不影响代码含义的更改（空白、格式、缺少分号等）。
- **refactor**: 既不修复 bug 也不添加功能的代码更改。
- **perf**: 提高性能的代码更改。
- **test**: 添加缺失的测试或更正现有测试。
- **build**: 影响构建系统或外部依赖的更改（如 gulp, broccoli, npm）。
- **ci**: 更改 CI 配置文件和脚本（如 Travis, Circle, BrowserStack, SauceLabs）。
- **chore**: 其他不修改 src 或测试文件的更改。
- **revert**: 撤销以前的提交。

## 示例

以下是一些示例提交信息：

**新增功能：**

```
feat(auth): add login functionality

Implemented the login functionality with validation and error handling.
```

**修复 Bug：**

```
fix(profile): correct user profile image URL

Fixed an issue where the profile image URL was incorrect due to a typo in the variable name.
```

**文档更改：**

```
docs(readme): update installation instructions

Updated the installation instructions to include the latest npm commands.
```

**代码样式更改：**

```
style(header): adjust header formatting

Adjusted the formatting of the header component to improve readability.
```

**重构代码：**

```
refactor(user-service): simplify user creation logic

Simplified the user creation logic by removing unnecessary checks and using helper functions.
```
