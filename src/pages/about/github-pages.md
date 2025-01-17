---
layout: src/layouts/Default.astro
title: Host Jekyll on GitHub Pages
navTitle: GitHub Pages
navOrder: 10000
pubDate: 2022-09-17
keywords: jekyll boilerplate,github pages,github action
description: How to get the most from Jekyll Boilerplate and GitHub Pages.
bannerImage:
    src: /img/surface-accessories-700.webp
    alt: Dummy image
---

You can host Astro sites on GitHub pages. Use the [Astro Deploy Action](https://github.com/withastro/action) to run your own build.

You can copy [the Astro Boilerplate GitHub Action configuration](https://github.com/Steve-Fenton/astro-boilerplate/blob/main/.github/workflows/build-astro.yml) if you want to host your site on GitHub Pages. There are no variables to update.

The Astro Deploy Action is really easy to set up and publishes the output directly to GitHub Pages. All you need to do is set up GitHub Pages to serve content from "Actions".

:::div{.note}

The settings for GitHub Pages are:

- Source: `Deploy from Actions`
- Branch: `gh-pages /(root)`

:::

This site is hosted on GitHub Pages.