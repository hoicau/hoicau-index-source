---
title: "Markdown Syntax Showcase"
author: 澈海秋光
pubDatetime: 2026-06-28T08:00:00Z
featured: true
draft: false
tags:
  - markdown
  - showcase
description: "A sample post showcasing the Markdown syntax and formatting features supported by this blog — headings, code blocks, callouts, tables and more."
---

This post demonstrates the formatting features available out of the box — from
basic text styling to syntax-highlighted code blocks and callouts.

> 中文版见 [Markdown 语法示范](/posts/markdown-syntax-showcase-zh)。

## Table of contents

## Text formatting

You can make text **bold**, _italic_, ***both at once***, ~~strikethrough~~,
and `inline code`. Links look like [this](https://github.com/hoicau).

Footnotes are supported too.[^1]

[^1]: This is a footnote — it renders at the bottom of the page.

## Lists

Unordered:

- First item
- Second item
  - Nested item
  - Another nested item
- Third item

Ordered:

1. Clone the repository
2. Run `pnpm install`
3. Start the dev server

Task list:

- [x] Finish the showcase post
- [x] Add Chinese translation
- [ ] Deploy to production

## Blockquotes

> Simplicity is prerequisite for reliability.
> — Edsger W. Dijkstra

## Callouts

Obsidian-style callouts are supported:

> [!NOTE]
> Useful side information the reader should notice.

> [!TIP]
> Keyboard shortcuts can boost your productivity a lot.

> [!WARNING]
> This action cannot be undone — proceed with caution.

> [!IMPORTANT]
> Remember to check your environment variables before deploying.

## Code

Inline code: `const greeting = "Hello, world.";`

Code block with a file-name label:

```ts file="src/utils/greet.ts"
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("world"));
```

Highlight a line (`[!code highlight]`):

```js file="example.js"
function add(a, b) {
  return a + b; // [!code highlight]
}
```

Diff annotations (`[!code ++]` / `[!code --]`):

```ts
function sum(numbers: number[]) {
  let total = 0; // [!code --]
  return numbers.reduce((acc, n) => acc + n, 0); // [!code ++]
}
```

Word highlight (`[!code word:hoicau]`):

```bash
git clone https://github.com/hoicau/hoicau-index-source.git # [!code word:hoicau]
```

## Tables

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm dev`     | Start the local dev server                   |
| `pnpm build`   | Build the site and generate the search index |
| `pnpm preview` | Preview the build locally                    |

## Images

![Default OG image](/default-og.jpg)

## Horizontal rule

---

That's a tour of the formatting this blog supports — copy this file as a
starting point for your own posts. 🙂
