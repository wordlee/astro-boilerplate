---
layout: src/layouts/Default.astro
title: Writing
navOrder: 5000
pubDate:   2022-09-17
keywords: astro,boilerplate,writing
description: How to write in Astro.
bannerImage:
    src: /img/surface-accessories-700.webp
    alt: Dummy image
---

Writing in Astro is super-easy.

The only folder you need to work in is `src/pages/` and the only file type you need to know is markdown (`.md`).

Add a file called "example.md" to the `src/pages/` folder with the following content:

```markdown
---
layout: src/layouts/Default.astro
title: Example
navOrder: 9000
---

Hello world! 

```

The page will be added to the menu and you can click on it to see your content.

:img{ src="/img/screens/example-page.webp" alt="The output of the example page markdown" loading="lazy"}

You can expand your content using Markdown. You can learn how to use markdown on the [CommonMark tutorial](https://commonmark.org/help/tutorial/). There are also some custom [markdown extensions](/featres/markdown/) that give you markdown super-powers.

## Child Items

You can add child pages and articles by naming folders after their parent page. The folders that you create form part of the address of the page or post.

### Child Pages

You can put pages into folders. If you wanted to add pages as "child items" of your "Example" page, put them in a folder named `/examples/`. If the folder matches the page, they become linked. Simple.

- Example (`/pages/example.md`)
  - Child Page 1 (`/pages/example/child-page-1.md`)
  - Child Page 2 (`/pages/example/child-page-2.md`)

### Child Articles

Add articles to folders, for example a year and month folder as shown below:

- Articles (`/pages/articles.md`)
  - Child Page 1 (`/pages/articles/2022/12/article-1.md`)
  - Child Page 2 (`/pages/articles/2022/12/article-2.md`)
