import type { MarkdownInstance } from "astro";

export const showInSitemap = (p: MarkdownInstance<Record<string, any>>) => {
  if (typeof p.frontmatter.navSitemap !== 'undefined'
    && p.frontmatter.navSitemap == false) {
    return false;
  }

  return true;
}

export const showInSearch = (p: MarkdownInstance<Record<string, any>>) => {
  if (typeof p.frontmatter.navSearch !== 'undefined'
    && p.frontmatter.navSearch == false) {
    return false;
  }

  return true;
}

export const showInMenu = (p: MarkdownInstance<Record<string, any>>) => {
  if (typeof p.frontmatter.navMenu !== 'undefined'
    && p.frontmatter.navMenu == false) {
    return false;
  }

  return true;
}

export const isAuthor = (p: MarkdownInstance<Record<string, any>>) => {
  if (p?.frontmatter?.layout?.indexOf('/Author.astro') > -1) {
    return true;
  }

  return false;
}

export const sortByPubDate = (a: MarkdownInstance<Record<string, any>>, b: MarkdownInstance<Record<string, any>>) => {
  return b.frontmatter.pubDate.localeCompare(a.frontmatter.pubDate);
}

export const sortByPubDateDesc = (a: MarkdownInstance<Record<string, any>>, b: MarkdownInstance<Record<string, any>>) => {
  return b.frontmatter.pubDate.localeCompare(a.frontmatter.pubDate);
}