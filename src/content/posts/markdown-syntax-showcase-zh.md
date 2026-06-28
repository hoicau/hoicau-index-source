---
title: "Markdown 语法示范"
author: 澈海秋光
pubDatetime: 2026-06-28T08:00:00Z
featured: true
draft: false
tags:
  - markdown
  - showcase
description: "一篇示范文，展示本博客支持的各种 Markdown 语法与排版功能：标题、代码块、提示框、表格等。"
---

这篇文章用来展示本博客支持的各类 Markdown 语法，从基础文本样式到带语法高亮的代码块与提示框。

> English version: [Markdown Syntax Showcase](/posts/markdown-syntax-showcase)。

## Table of contents

## 文本样式

普通段落文字。可以把文字设为 **粗体**、_斜体_、***粗斜体***、~~删除线~~，以及 `行内代码`。链接长这样 [这里](https://github.com/hoicau)。

也支持脚注。[^1]

[^1]: 这是一条脚注，会渲染在页面底部。

## 列表

无序列表：

- 第一项
- 第二项
  - 嵌套项
  - 另一个嵌套项
- 第三项

有序列表：

1. 克隆仓库
2. 运行 `pnpm install`
3. 启动开发服务器

任务列表：

- [x] 写完示范文
- [x] 加上中文翻译
- [ ] 部署上线

## 引用

> 简洁是可靠的前提。
> — Edsger W. Dijkstra

## 提示框

支持 Obsidian 风格的提示框（callouts）：

> [!NOTE]
> 这是一条普通提示，读者应当留意。

> [!TIP]
> 善用快捷键可以大幅提升效率。

> [!WARNING]
> 这个操作不可撤销，请谨慎执行。

> [!IMPORTANT]
> 部署前记得检查环境变量。

## 代码

行内代码：`const greeting = "你好，世界。"`

带文件名标签的代码块：

```ts file="src/utils/greet.ts"
export function greet(name: string): string {
  return `你好，${name}！`;
}

console.log(greet("世界"));
```

高亮某一行（`[!code highlight]`）：

```js file="example.js"
function add(a, b) {
  return a + b; // [!code highlight]
}
```

Diff 标注（`[!code ++]` / `[!code --]`）：

```ts
function sum(numbers: number[]) {
  let total = 0; // [!code --]
  return numbers.reduce((acc, n) => acc + n, 0); // [!code ++]
}
```

词语高亮（`[!code word:hoicau]`）：

```bash
git clone https://github.com/hoicau/hoicau-index-source.git # [!code word:hoicau]
```

## 表格

| 命令           | 作用                             |
| :------------- | :------------------------------- |
| `pnpm dev`     | 启动本地开发服务器               |
| `pnpm build`   | 构建站点并生成 Pagefind 搜索索引 |
| `pnpm preview` | 本地预览构建结果                 |

## 图片

![默认 OG 图](/default-og.jpg)

## 分割线

---

到此为止。可以复制这个文件作为你自己文章的起点。🙂
