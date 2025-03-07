---
layout: src/layouts/Default.astro
title: Articles
navOrder: 4000
pubDate: 2022-09-23
keywords: astro boilerplate,articles,posts,list
description: How articles and authors work in Astro Boilerplate.
bannerImage:
    src: /img/surface-accessories-700.webp
    alt: Dummy image
---

In Astro Boilerplate, articles (posts, articles, blogs, news, etc) require a couple of puzzle pieces. In the examples below, the term `articles` is used, but you can call this anything as long as you keep it consistent.

1. `/pages/articles.md` (used for frontmatter)
2. `/pages/articles/` folder
3. `/pages/articles/[page].astro` (list page)
4. `/pages/articles/[year]/[month]/your-article.md`

The top-level markdown page only contains front-matter that is used for things like the menu.

The folder contains the list page logic `[page].astro` and folders containing articles.

## Authors

Author profiles are just normal pages, with the author layout and a unique id. You can place them in a folder to group them.

```yaml
layout: src/layouts/Author.astro
id: steve-fenton
title: Steve Fenton
```

You can link multiple authors to an article using the article's frontmatter.

```yaml
layout: src/layouts/Default.astro
title: Sample Post
navMenu: false
authors:
    - steve-fenton
```

The author, or authors, in the frontmatter are matched to author profiles by the id.

## Using Different Article Names

You can use a different name for articles, or even have multiple collections with different names.

1. `/pages/blog.md` (used for frontmatter)
2. `/pages/blog/` folder
3. `/pages/blog/[page].astro` (list page)
4. `/pages/blog/[year]/[month]/your-article.md`

Adjust the frontmatter in `[page].astro` in your new folder to change the title.

```typescript
const frontmatter: Frontmatter = {
  layout: 'src/layouts/Default.astro',
  title: 'Blog',
  //...
}
```

Adjust the filter in `[page].astro` in your new folder to change the listed items.

```typescript
const sourcePosts = await Astro.glob('../blog/**/*.md');
```

Add a new feed by copying `atom.xml.ts` and changing the path for articles:

```typescript
const allArticles = import.meta.glob('./blog/**/*.md');
```