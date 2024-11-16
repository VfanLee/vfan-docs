# import

## `import` vs `import type`

### 编译的差异

- **`import`**：普通的 `import` 会在编译后保留导入声明，即使你只用了类型：

    ```ts
    import { MyType } from './types';

    // 如果 MyType 是类型，仍然会生成一个空的 import 语句：
    import { MyType } from './types';
    ```

- **`import type`**：使用 `import type` 时，编译后会完全移除导入：

    ```ts
    import type { MyType } from './types';

    // 编译后完全不会生成 import 语句。
    ```

### 总结

- **`import type`** 是为类型设计的导入方式，与类型的具体定义形式（如 `type`、`interface`、`enum`、`class` ……）无关。
- 如果你确定只使用类型（无论是 `type`、`interface`，还是 `class` 等），推荐使用 `import type`，更高效、更语义化。
- 如果需要同时使用类型和值，就用普通的 `import`。
