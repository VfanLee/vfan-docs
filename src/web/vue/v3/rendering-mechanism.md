# 渲染机制

## 虚拟 DOM {#Virtual-DOM}

***虚拟 DOM*** 是一种虚拟的，保存在内存中的数据结构，用来代表 UI 的表现，和 ***真实 DOM*** 节点保持同步。

Virtual DOM 是由一系列的 Vnode 组成的。

## 渲染管线 {#Render-Pipeline}

1. 编译（Compile）：Vue 模板被编译为渲染函数：即用来返回虚拟 DOM 树的函数。这一步骤可以通过构建步骤提前完成，也可以通过使用运行时编译器即时完成。
2. 挂载（Mount）：运行时渲染器调用渲染函数，遍历返回的虚拟 DOM 树，并基于它创建实际的 DOM 节点。这一步会作为响应式副作用执行，因此它会追踪其中所用到的所有响应式依赖。
3. 更新（Patch）：当一个依赖发生变化后，副作用会重新运行，这时候会创建一个更新后的虚拟 DOM 树。运行时渲染器遍历这棵新树，将它与旧树进行比较，然后将必要的更新应用到真实 DOM 上去。

![Render Pipeline](assets/render_pipeline.png)